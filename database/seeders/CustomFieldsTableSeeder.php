<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class CustomFieldsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('custom_fields')->delete();
        
        \DB::table('custom_fields')->insert(array (
            0 => 
            array (
                'id' => 1,
                'created_at' => '2024-08-18 00:00:00',
                'updated_at' => '2024-08-27 13:47:32',
                'field_name' => 'About_Main',
                'field_type' => 'longText',
                'field_value' => 'With over 25 years of combined Real Estate experience, our mission has remained the same: sharing our expertise with care, trust, and understanding to help clients achieve their real estate goals. We are dedicated to serving and helping those buy, sell, and invest in real estate. Our team of experts represents the best and brightest in the industry, and we’re always striving to lead the field in research, innovation, and consumer education. Today’s buyers and sellers need a trusted resource that can guide them through the complex world of real estate. With our extensive knowledge and commitment to providing only the best and most timely information to our clients, we are your go-to source for real estate industry insight and advice.',
                'imagePath' => '/images/thumbnail_Jen_Mains.jpg',
                'imagePath2' => '/images/thumbnail_Ayden_Mains.png',
            ),
            1 => 
            array (
                'id' => 3,
                'created_at' => NULL,
                'updated_at' => '2024-08-23 00:11:03',
                'field_name' => 'Mortgage_Facts',
                'field_type' => 'longText',
                'field_value' => 'Home Price – The dollar amount you expect to pay for the home itself. This will depend on the size of the home and its location as well as current market conditions.

Loan Terms – Your loan term refers to how length of your mortgage. Loan terms can be: 10, 15, 20, 25, or 30 years. The length of your mortgage will determine how much interest you pay over the course of the loan as well as how much your monthly payments are.

Loan APR – A loan APR is the annual percentage rate of your mortgage. In the simplest terms, APR is the combination of two things: the interest rate of the loan, plus lender fees and closing costs. Lender fees vary and may include appraisal fees, underwriting fees, processing fees, etc. Closing costs can include closing fees, insurance fees, taxes, and prepaid interest. The APR reflects the true cost of borrowing, over the course of one year.

Property Taxes – Property taxes are taxes you pay on your home. The amount you pay is determined by your home’s value and location and can vary year-by-year.

Homeowners Insurance – An insurance policy that you purchase from a provider to protect your home. Different policies cover different risks such as fires, storm damage, and theft. The exact amount you’ll pay and the specifics of what you’ll need to cover vary by location, policy, and provider.

HOA Fees – An HOA is a homeowner association. HOA fees are generally required when you purchase a property that is part of a planned community. In a planned community with an HOA, community members pay a certain amount of money either annually or every month in the form of HOA fees. This money is pooled and then used to cover things like maintenance and upkeep of shared spaces.

Down Payment - This is the initial payment you put toward the cost of your new home. How much do you plan to put down? You could put little-to-no money down depending on your loan type. However, when you enter a higher down payment into the mortgage calculator, it lowers your estimated monthly payment.',
                'imagePath' => NULL,
                'imagePath2' => NULL,
            ),
            2 => 
            array (
                'id' => 4,
                'created_at' => NULL,
                'updated_at' => '2024-09-07 04:02:34',
                'field_name' => 'Why_Buy_With_Heritage',
                'field_type' => 'longText',
                'field_value' => 'When you choose The Heritage Group as your buyer\'s agent, you\'re not just getting someone to help you find a house—you\'re gaining a dedicated partner who genuinely cares about your journey to homeownership. We believe that buying a home is one of the most significant decisions you\'ll make, and we’re committed to making that experience as smooth, enjoyable, and successful as possible.
We take the time to truly understand your needs, preferences, and goals, so we can find a home that feels just right for you. Whether it\'s your first home or your forever home, we’ll be by your side every step of the way, providing expert guidance, answering your questions, and ensuring you feel confident and informed throughout the entire process.',
                'imagePath' => 'http://127.0.0.1:8000/storage/images/tyCgwFMH8wWZ05BqwYNxpgtMWW7KGgRCsRCx7yOp.jpg',
                'imagePath2' => NULL,
            ),
            3 => 
            array (
                'id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
                'field_name' => 'What_Sets_Us_Apart',
                'field_type' => 'longText',
                'field_value' => 'We go beyond simply searching for homes; we dig deep into market data to ensure you\'re making the most informed decision possible. Our commitment to locating hidden gems—homes not even on the market yet—gives you access to exclusive opportunities that others might miss. And when it comes to pricing, we don’t just aim for a good deal; we strategize to create win-win scenarios, ensuring that you not only find your dream home but also make a sound investment for the future. We’re here to guide you, support you, and celebrate with you every step of the way. When you choose us, you’re choosing a partner who genuinely cares about turning your real estate dreams into reality.',
                'imagePath' => '/storage/images/RaM0R2QSMbwGtF5Yf8K22B0bkKpmuOsSguoS9XDC.jpg',
                'imagePath2' => NULL,
            ),
            4 => 
            array (
                'id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
                'field_name' => 'About_Heritage',
                'field_type' => 'longText',
                'field_value' => 'The Heritage Group was founded by a dynamic mother and daughter duo who share a passion for helping others achieve their real estate dreams. With over 25 years of combined experience, we have grown into a trusted team dedicated to providing personalized care, trust, and expertise in every transaction. Our mission is simple: to empower our clients—whether buying, selling, or investing—by guiding them with the knowledge and confidence they need in today’s ever-evolving real estate market.

At The Heritage Group, we believe in leading with integrity, innovation, and a deep commitment to education. Our team represents the best and brightest in the industry, continually striving to stay ahead of the curve in research and market trends. We understand that real estate is more than just a transaction; it’s a life-changing experience. That’s why we are devoted to being your reliable resource, offering insightful advice and tailored strategies to help you navigate the complexities of real estate with ease.',
                'imagePath' => NULL,
                'imagePath2' => NULL,
            ),
            5 => 
            array (
                'id' => 7,
                'created_at' => NULL,
                'updated_at' => '2024-08-25 22:08:25',
                'field_name' => 'About_Jen',
                'field_type' => 'longText',
                'field_value' => 'Jen brings over 25 years of real estate experience, passion, and results-driven determination. She has been an active sales agent, has built and run top-producing real estate teams, and has served as a Team Leader of three different Keller Williams Market Centers over the span of 14 years.

Gleaning from her history of successful experiences while utilizing the proven tools, models and systems provided by Keller Williams, Jen is able to coach agents to build their businesses, attract and lead talent to their teams, build wealth through implementing systems and create balance in their lives.

She has consistently been a top-performing leader within the real estate community; recruiting, coaching, and training top-producing agents. A highly motivated leader with excellent communication and problem-solving skills. She is driven to succeed and inspires others to reach their highest potential.

She has served top real estate professionals from coast to coast as a KW MAPS BOLD coach, KW MAPS Breakthrough Coach, KW Productivity Coach, and KW Mastery Agent Coach.

When not being a Team Leader/Coach, Jen spends her time doing the most important role of her life – Wife to her wonderful husband and Mom to their beautiful children - the most important people in her life.',
                'imagePath' => 'images/thumbnail_Jen_Mains.jpg',
                'imagePath2' => NULL,
            ),
            6 => 
            array (
                'id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
                'field_name' => 'About_Ayden',
                'field_type' => 'longText',
                'field_value' => 'As a dedicated realtor with a strong background in interior design and real estate, I bring a unique eye for detail, expert negotiation skills, and an unwavering commitment to my clients. Whether you\'re buying, selling, or investing, I offer personalized strategies and a hands-on approach to ensure a seamless and successful real estate journey. My goal is to help you achieve your dreams while navigating the complexities of the market with confidence and ease. However, I have a few more interesting facts about me that might be surprising!

What is the best piece of advice you have been given?

Growing up, there was a saying that always followed me—and that was “what are 3 things you are grateful for?” My mom would do this whenever I would be complaining about my day to remind me there is still good happening in the bad. When asked, what is the best piece of advice I\'ve ever been given, I instantly thought of this saying. It\'s a practice that keeps me grounded and focused on the positives, even on the busiest days.

Cats or Dogs?

I like both, but my husband is allergic, so it will have to be dogs. Animals become a big part of our lives, and I wouldn’t have it any other way!

What is the most inspiring part of your job?

The most inspiring part of my job is being able to help and walk alongside people who are accomplishing major life moments. Whether it\'s finding a dream home or making a smart investment, I’m there every step of the way.

What would be your superpower?

If I were a superhero, my superpower would be navigating unique situations. Real estate is full of them, and I thrive on finding creative solutions that others might overlook.

What did you want to be when you grew up?

When I was 5, I was pretty sure I\'d be a vet when I grew up. My love for animals is still strong, but my passion for real estate won out in the end.

When you are not helping people through Real Estate/Interior Design, how do you spend your time?

When I’m not working, I love spending time with my husband and our dog, traveling, or finding new hole-in-the-wall restaurants around town. I have a whole list of places to recommend, so reach out if you need some ideas!',
                'imagePath' => 'images/thumbnail_Ayden_Mains.png',
                'imagePath2' => NULL,
            ),
            7 => 
            array (
                'id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
                'field_name' => 'Main_Page_Image',
                'field_type' => NULL,
                'field_value' => NULL,
                'imagePath' => 'images/house-3133771_1920.jpg',
                'imagePath2' => NULL,
            ),
        ));
        
        
    }
}