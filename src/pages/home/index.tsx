import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { Header } from "../../components/Header"
import { BlinkingH6, ButtonFooter, Container, MedicineContainer, ErrorMessage } from "./styles"
import { axiosBase } from "../../lib/axios"
import { useEffect, useState } from "react"
import { format } from "date-fns"

interface ProductProps {
    name: string
    published_at: string
    company: string
    documents: {
        type: string
        url: string
    }[]
}

export function Home() {
    const [originalProducts, setOriginalProducts] = useState<ProductProps[]>([])
    const [products, setProducts] = useState<ProductProps[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const [medSearchValue, setMedSearchValue] = useState("")
    const [companySearchValue, setCompanySearchValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem)

    const handleDownload = (product: ProductProps) => {
        const patientDocument = product.documents.find(doc => doc.type === 'PATIENT')
        if (patientDocument) {
            window.open(patientDocument.url, '_blank')
        } else {
            console.log('Documento do tipo PATIENT não encontrado.')
        }
    }

    const nextPage = () => {
        if (indexOfLastItem < products.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const sortedProducts = currentProducts.sort((a, b) => {
        const dateA = new Date(a.published_at)
        const dateB = new Date(b.published_at)
        return dateA.getTime() - dateB.getTime()
    })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosBase.get('/data')
                setOriginalProducts(response.data)
                setProducts(response.data)
            } catch (error) {
                console.error('Erro ao carregar dados:', error)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const handleSearch = () => {
            const filteredProducts = originalProducts.filter(product =>
                product.name.toLowerCase().includes(medSearchValue.toLowerCase()) &&
                product.company.toLowerCase().includes(companySearchValue.toLowerCase())
            )

            if (filteredProducts.length === 0 && (medSearchValue.trim() !== "" || companySearchValue.trim() !== "")) {
                setErrorMessage("Nenhum produto encontrado. Por favor, verifique o nome do medicamento ou do laboratório.")
            } else {
                setErrorMessage("")
            }

            setProducts(filteredProducts)
        }

        handleSearch()
    }, [medSearchValue, companySearchValue, originalProducts])

    const renderProduct = (product: ProductProps, index: number) => {
        const truncatedName = product.name.length > 20 ? `${product.name.substring(0, 25)}...` : product.name
        const truncatedCompany = product.company.length > 20 ? `${product.company.substring(0, 9)}...` : product.company
        const formattedDate = format(new Date(product.published_at), 'dd/MM/yyyy')

        return (
            <MedicineContainer key={index}>
                <h1 style={{textAlign:'center'}}>{truncatedName}</h1>
                <div style={{display: 'flex', flexDirection: 'column', gap:'30px'}}>
                    <div>
                        <p>Compania</p>
                        <strong>{truncatedCompany}</strong>
                    </div>
                    <div>
                        <p>Publicação</p>
                        <strong>{formattedDate}</strong>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button onClick={() => handleDownload(product)}>Download bula</button>
                </div>
            </MedicineContainer>
        )
    }

    return (
        <Container>
            <Header 
                onSearch={(medTerm, companyTerm) => {
                    setMedSearchValue(medTerm)
                    setCompanySearchValue(companyTerm)
                }} 
            />
            <BlinkingH6>Ajudamos os consumidores a achar mais de mil medicamentos e bula por dia..</BlinkingH6>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <main>
                {sortedProducts.map(renderProduct)}
            </main>
            <footer>
                <ButtonFooter onClick={prevPage} disabled={currentPage === 1}>
                    <CaretLeft />
                </ButtonFooter>
                <strong>{(currentPage - 1) * itemsPerPage + 1}</strong>
                <strong>de</strong>
                <strong>{Math.min(products.length, currentPage * itemsPerPage)}</strong>
                <ButtonFooter onClick={nextPage} disabled={indexOfLastItem >= products.length}>
                    <CaretRight/>
                </ButtonFooter>
            </footer>
        </Container>
    )
}
