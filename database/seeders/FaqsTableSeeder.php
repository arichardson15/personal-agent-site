<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class FaqsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('faqs')->delete();

        \DB::table('faqs')->insert(array (
            0 =>
            array (
                'id' => 1,
                'created_at' => NULL,
                'updated_at' => '2024-08-23 15:04:27',
                'site_section' => 'Buy',
                'question' => 'How do I know if I’m ready to buy a home?',
                'answer' => 'Buying a home is a significant commitment, and it\'s important to feel confident in your financial situation and long-term plans. If you’re considering homeownership, we’ll help you evaluate your readiness by looking at your financial health, credit score, savings, and lifestyle needs.',
                'number' => 1,
                'imagePath' => NULL,
            ),
            1 =>
            array (
                'id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'How much can I afford?',
                'answer' => 'Determining your budget is a crucial first step. We recommend starting with a loan officer who can gather your pre-approval. This will give you a clear understanding of your price range. We can connect you with trusted lenders who will work with you to determine what you can comfortably afford.
',
                'number' => 2,
                'imagePath' => NULL,
            ),
            2 =>
            array (
                'id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'What should I look for when viewing homes?',
                'answer' => 'While the appearance of a home is important, it’s also essential to consider factors like location, neighborhood, property condition, and potential for resale. We’ll guide you through this process, helping you assess both the emotional and practical aspects of each property.',
                'number' => 3,
                'imagePath' => NULL,
            ),
            3 =>
            array (
                'id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'How do you find homes that aren’t on the market?',
                'answer' => 'At The Heritage Group, we have a network and resources that allow us to find off-market properties, giving you access to homes that others might not even know about. This can include homes from our personal contacts, upcoming listings, and even properties that aren’t actively being sold but might be available for the right buyer.
',
                'number' => 4,
                'imagePath' => NULL,
            ),
            4 =>
            array (
                'id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'What is a “win-win” pricing strategy?',
                'answer' => 'Our win-win pricing strategy ensures that both you and the seller are satisfied with the transaction. We use market data and our negotiation expertise to find a price that reflects the true value of the home, while also aligning with your financial goals.',
                'number' => 4,
                'imagePath' => NULL,
            ),
            5 =>
            array (
                'id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'What is the closing process like?',
                'answer' => 'The closing process involves finalizing the purchase, signing documents, and transferring ownership. We’ll be by your side to ensure everything goes smoothly, from coordinating with the title company to reviewing contracts and ensuring that all necessary steps are completed.
',
                'number' => 6,
                'imagePath' => NULL,
            ),
            6 =>
            array (
                'id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'How long does the home-buying process take?',
                'answer' => 'The timeline can vary based on market conditions, your financing, and the specifics of your home search. On average, it can take anywhere from a few weeks to a few months. We’ll provide a realistic timeline and keep you informed every step of the way.
',
                'number' => 7,
                'imagePath' => NULL,
            ),
            7 =>
            array (
                'id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'What if I have concerns after the purchase?',
                'answer' => 'Our relationship doesn’t end at closing. We’re here to support you even after you’ve moved into your new home. Whether you have questions about maintenance, property taxes, or anything else, you can count on us to be a resource.
',
                'number' => 8,
                'imagePath' => NULL,
            ),
            8 =>
            array (
                'id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'Can you help me sell my current home?',
                'answer' => 'Absolutely! If you’re selling and buying at the same time, we’ll work to coordinate both transactions to ensure a smooth transition. Our expertise in both buying and selling means you’re in good hands throughout the entire process.
',
                'number' => 9,
                'imagePath' => NULL,
            ),
            9 =>
            array (
                'id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Buy',
                'question' => 'Why should I work with The Heritage Group?',
                'answer' => 'We’re more than just real estate agents; we’re your partners in this journey. With our deep knowledge of the market, access to exclusive properties, and commitment to your satisfaction, we’ll make sure your home-buying experience is as seamless and enjoyable as possible.
',
                'number' => 10,
                'imagePath' => NULL,
            ),
            10 =>
            array (
                'id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'WhySellWithUs',
                'question' => 'Why Sell with The Heritage Group?',
                'answer' => 'Selling your home is a significant decision, and choosing the right partner can make all the difference. At The Heritage Group, we bring a blend of expertise, dedication, and personalized service that sets us apart.',
                'number' => 1,
                'imagePath' => NULL,
            ),
            11 =>
            array (
                'id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'WhySellWithUs',
                'question' => 'Proven Expertise',
                'answer' => 'With years of experience in the real estate market, The Heritage Group has a deep understanding of what it takes to sell homes effectively. We know how to position your property in the best light, attract the right buyers, and negotiate deals that meet your goals.
',
                'number' => 2,
                'imagePath' => 'images/proven expertise.jpeg',
            ),
            12 =>
            array (
                'id' => 13,
                'created_at' => NULL,
                'updated_at' => '2024-08-25 19:01:04',
                'site_section' => 'WhySellWithUs',
                'question' => 'Comprehensive Market Knowledge',
                'answer' => 'Our team keeps a pulse on the latest market trends, ensuring your home is priced strategically to attract serious buyers while maximizing your return. We leverage data-driven insights to provide you with a clear picture of the market, helping you make informed decisions.

Our map of recently sold properties shows our specialization to homes in the Twin Cities and abroad!',
                'number' => 3,
                'imagePath' => 'images/Sold Map.png',
            ),
            13 =>
            array (
                'id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'WhySellWithUs',
                'question' => 'Personalized Marketing Strategies',
                'answer' => 'We know that every home is unique, which is why we create customized marketing plans tailored to showcase your property’s best features. From professional photography and virtual tours to targeted online advertising and open houses, we ensure your home gets the attention it deserves.',
                'number' => 4,
                'imagePath' => 'images/Marketing Plan.jpeg',
            ),
            14 =>
            array (
                'id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'WhySellWithUs',
                'question' => 'Strong Negotiation Skills',
                'answer' => 'Our team’s negotiation expertise is second to none. We advocate for your interests at every step, ensuring that you achieve the best possible outcome. Whether it’s navigating offers, managing contingencies, or closing the deal, we’re with you every step of the way.
',
                'number' => 5,
                'imagePath' => 'images/handshake.jpeg',
            ),
            15 =>
            array (
                'id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'WhySellWithUs',
                'question' => 'Exceptional Client Service',
                'answer' => 'At The Heritage Group, we pride ourselves on building lasting relationships with our clients. We take the time to understand your needs and concerns, offering clear communication, regular updates, and unwavering support throughout the entire selling process. Your satisfaction is our top priority.
',
                'number' => 6,
                'imagePath' => 'images/Client Service.jpeg',
            ),
            16 =>
            array (
                'id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'WhySellWithUs',
                'question' => 'Network of Resources',
                'answer' => 'When you partner with us, you gain access to our extensive network of professionals, including stagers, photographers, contractors, and more. We’ll connect you with the right resources to prepare your home for the market and ensure a smooth transaction from start to finish.
',
                'number' => 7,
                'imagePath' => 'images/Resource Network.jpeg',
            ),
            17 =>
            array (
                'id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'WhySellWithUs',
                'question' => 'Track Record of Success',
                'answer' => 'Our success speaks for itself. The Heritage Group has a proven track record of helping homeowners sell their properties quickly and at top value. Our commitment to excellence has earned us the trust and loyalty of clients across the community.
',
                'number' => 8,
                'imagePath' => 'images/Checklist Complete.jpeg',
            ),
            18 =>
            array (
                'id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'When is the best time to sell my home?',
                'answer' => 'The best time to sell depends on various factors, including the local market conditions, your personal circumstances, and the type of home you’re selling. Traditionally, spring and early summer are popular times to list, but with the right strategy, homes can sell well year-round. We can provide you with a detailed analysis to determine the optimal time for your sale.',
                'number' => 1,
                'imagePath' => NULL,
            ),
            19 =>
            array (
                'id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'How do I determine the right asking price?',
            'answer' => 'Pricing your home correctly is crucial to attracting buyers and maximizing your return. We’ll conduct a thorough comparative market analysis (CMA) to evaluate similar properties in your area, consider current market trends, and assess your home’s unique features. Together, we’ll set a competitive price that reflects your home’s true value.
',
                'number' => 2,
                'imagePath' => NULL,
            ),
            20 =>
            array (
                'id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'What steps should I take to prepare my home for sale?',
                'answer' => 'First impressions matter. We’ll guide you through the process of decluttering, staging, and making any necessary repairs or updates to ensure your home shows its best. Our goal is to help you highlight your home’s strengths and create a welcoming atmosphere that appeals to potential buyers.
',
                'number' => 3,
                'imagePath' => NULL,
            ),
            21 =>
            array (
                'id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'How long will it take to sell my home?',
                'answer' => 'The timeline for selling a home can vary based on market conditions, your home’s price, and how well it’s presented. On average, homes may stay on the market for a few weeks to a few months. We’ll work with you to develop a marketing strategy that aims to sell your home within your desired timeframe.',
                'number' => 4,
                'imagePath' => NULL,
            ),
            22 =>
            array (
                'id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'What marketing strategies will you use to sell my home?',
                'answer' => 'We offer a comprehensive marketing plan that includes professional photography, virtual tours, targeted online advertising, open houses, and more. We’ll also leverage our network of potential buyers and other agents to increase your home’s visibility and attract qualified offers.
',
                'number' => 5,
                'imagePath' => NULL,
            ),
            23 =>
            array (
                'id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'Should I make improvements or sell my home as-is?',
                'answer' => 'The decision to make improvements depends on your home’s condition and the potential return on investment. We’ll help you weigh the pros and cons of making repairs or updates. In some cases, minor improvements can significantly boost your home’s market appeal and selling price, while in other situations, selling as-is may be more practical.
',
                'number' => 6,
                'imagePath' => NULL,
            ),
            24 =>
            array (
                'id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'What happens after I receive an offer?',
                'answer' => 'Once an offer is received, we’ll review it with you in detail, explaining all the terms and conditions. We’ll discuss whether to accept, counter, or reject the offer based on your goals. We’ll handle the negotiations to ensure you get the best possible outcome.
',
                'number' => 7,
                'imagePath' => NULL,
            ),
            25 =>
            array (
                'id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'What costs are involved in selling my home?',
                'answer' => 'Selling a home involves various costs, including closing costs, repairs, etc. We’ll provide you with a clear breakdown of these costs upfront, so there are no surprises. Our goal is to help you understand the financial aspects of the sale and ensure a smooth transaction.
',
                'number' => 8,
                'imagePath' => NULL,
            ),
            26 =>
            array (
                'id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'How do I handle multiple offers?',
                'answer' => 'If you receive multiple offers, we’ll help you evaluate them based on price, contingencies, financing, and other factors. Together, we’ll decide which offer is the strongest and negotiate terms that align with your goals.',
                'number' => 9,
                'imagePath' => NULL,
            ),
            27 =>
            array (
                'id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'What should I expect during the closing process?',
                'answer' => 'The closing process involves finalizing the sale and transferring ownership of the property to the buyer. We will guide you through this process, ensuring all paperwork is completed accurately and on time. We will also coordinate with the buyer’s agent, lenders, and title company to ensure a smooth and successful closing.
',
                'number' => 10,
                'imagePath' => NULL,
            ),
            28 =>
            array (
                'id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
                'site_section' => 'Sell',
                'question' => 'How do I choose the right real estate agent to sell my home?',
                'answer' => 'Choosing the right agent is essential to a successful sale. Look for someone with local market expertise, a strong track record, and a personalized approach. At The Heritage Group, we bring a unique blend of experience in New Construction Sales, interior design, and real estate, ensuring that you receive top-notch service tailored to your needs.
',
                'number' => 11,
                'imagePath' => NULL,
            ),
        ));


    }
}
