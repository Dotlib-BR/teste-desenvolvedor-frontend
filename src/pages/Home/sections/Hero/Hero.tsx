import React from 'react';
import Doctor from '../../../../assets/medical-prescription.svg?react';

const Hero = (): React.ReactElement => {
    return (
        <main className="container">
            <div className="flex-item-1">
                <h1 className="weight-bold">Bulário Eletrônico</h1>
                <p className="mt-2">
                    Conhecimento em cada dose: seu guia digital confiável para
                    uma saúde informada.
                </p>
            </div>
            <div className="flex-item-1 flex-end flex-column">
                <Doctor />
                <a
                    className="hero-svg-subtitle"
                    href="https://storyset.com/office"
                >
                    Office illustrations by Storyset
                </a>
            </div>
        </main>
    );
};

export default Hero;
