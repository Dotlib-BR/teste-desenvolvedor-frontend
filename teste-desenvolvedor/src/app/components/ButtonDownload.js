import { FaDownload } from "react-icons/fa";

function ButtonDownload({}) {
    return (
        <a className="botao-download" href="https://www.thecampusqdl.com/uploads/files/pdf_sample_2.pdf" download="nome_do_arquivo.pdf"><FaDownload /></a>
    );
}

export default ButtonDownload