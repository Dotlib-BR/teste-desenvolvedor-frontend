import styled from "styled-components";

//Animation
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    width: 50%;
    height: fit-content;

    display: flex;
    flex-direction: column;

    align-self: center;
    justify-content: center;
    gap: 20px;

    border-radius: 20px;
    border: solid 3px ${(props) => props.theme.primary};
    padding: 20px;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

export const Main = styled.main``