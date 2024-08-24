import React, { forwardRef } from 'react';

interface FAQComponentProps {
    faqQuestion: string;
    faqAnswer: string;
    faqQuestionCount: number;
}

const FAQComponenet = forwardRef<HTMLButtonElement, FAQComponentProps>((props, ref) => {
    const {
        faqQuestion,
        faqAnswer,
        faqQuestionCount,
    } = props;

    return (
        <div className="mx-auto py-3 px-64 border-tertiary border-2">
            <div>
            <h2 className="text-xl font-grotesk font-bold tracking-tight text-gray-900 sm:text-2xl">{faqQuestionCount}. {faqQuestion}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-900 font-grotesk">
                {faqAnswer}
            </p>
            </div>
        </div>
    );
});

export default FAQComponenet;
