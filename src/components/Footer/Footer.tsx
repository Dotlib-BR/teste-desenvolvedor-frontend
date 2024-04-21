import React from 'react';

const Footer = (): React.ReactElement => {
    function backToTop(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        scrollTo({ top: 0 });
    }

    return (
        <footer>
            <section className="container py-5 space-between">
                <div>
                    <img
                        src="./src/assets/logo.png"
                        alt="Dotlib Logo"
                        className="logo-footer"
                    />
                    <p className="mt-2 color-white">
                        Projeto desenvolvido como desafio <br />
                        porposto pela Dotlib.
                    </p>
                </div>

                <div className="">
                    <p className="color-white text-center">
                        © 2022 All rights reserved
                    </p>
                </div>

                <a href="#" className="back-to-top " onClick={backToTop}>
                    De volta ao topo
                </a>
            </section>
        </footer>
    );
};

export default Footer;
