import React from 'react';

const Footer = (): React.ReactElement => {
    function backToTop(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        scrollTo({ top: 0 });
    }

    return (
        <footer>
            <section className="container py-5 space-between">
                <div className="mt-4 flex-center flex-column">
                    <img
                        src="./src/assets/logo.png"
                        alt="Dotlib Logo"
                        className="logo-footer"
                    />
                    <p className="color-white text-center mt-3">
                        © 2022 All rights reserved
                    </p>
                </div>

                <a href="#" className="back-to-top mt-4" onClick={backToTop}>
                    De volta ao topo
                </a>
            </section>
        </footer>
    );
};

export default Footer;
