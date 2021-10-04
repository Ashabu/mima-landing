import React from 'react';
import './faq.scss';
import FaqItem from './FaqItem';

const FAQ = [
    {
        title: 'WHAT IS THE AFFILIATE PROGRAM?',
        desc: 'The affiliate program works like a commission based system, based on sales of services through entertainment products. The MiMa online merchant offers its services via its affiliate partners, through the MiMa Affiliates program, with which he subsequently shares the profit made - generated by player losses - from mima.games. In the particular case of the MiMa Affiliates program, the commission –"affiliate"- partner brings his visitors to the mima.games site, and then receives his monthly commission payment generated by new customers he has referred on mima.games.'
    },
    {
        title: 'WHY SHOULD I REGISTER ON THE AFFILIATE PROGRAM?',
        desc: 'There are many reasons to register in our affiliate program. It is free of charge, offers high revenue share, plenty of products, so why not monetize your traffic with MiMa Affiliates today.'
    },
    {
        title: 'WHO CAN REGISTER IN THE AFFILIATE PROGRAM?',
        desc: 'Every person/webmaster operating their own web site(s) while respecting our general terms and conditions can join MiMa Affiliates. Each affiliate partner may only register once.'
    },
    {
        title: 'ARE THERE ANY JOINING FEES TO BE ASSOCIATED WITH MiMa AFFILIATES?',
        desc: 'Joining MiMa Affiliates is completely free! There are no charges at all.'
    },
    {
        title: 'HOW DO I REGISTER TO BECOME A MEMBER OF MiMa AFFILIATES?',
        desc: 'Signing up to MiMa Affiliates is easy! Simply click on REGISTER button and fill in the form to become a member of MiMa Affiliates.'
    },
    {
        title: 'CAN I REGISTER MORE THAN ONE WEBSITE?',
        desc: 'YYes, you can. If your application is successful you can register multiple websites in your MiMa Affiliates account. You can create individual tracking links for each site so you can track their performances.'
    },
    {
        title: 'DOES MiMa AFFILIATES ACCEPT ALL WEBSITES?',
        desc: 'No, we don’t. We have to review each application individually and evaluate whether its nature or content are suitable for MiMa Affiliates or not.'
    },
    {
        title: 'CAN I BECOME AN AFFILIATE EVEN IF I DON’T HAVE MY OWN WEBSITE?',
        desc: 'Yes, you can. We provide alternative tools that you can use to promote mima.games. Contact our affiliate manager today at affiliates@mima-poker.com to discuss the options available for you!'
    },
    {
        title: 'HOW OFTEN ARE MY STATISTICS BEING UPDATED?',
        desc: 'Your statistics are updated in real-time.'
    },
    {
        title: 'HOW MUCH CAN I EARN?',
        desc: 'There is no limit to the amount of revenue you can earn. The more effort you put in to sending quality traffic, the more you earn.'
    },
    {
        title: 'CAN I PROMOTE MiMa AFFILIATES AND GET COMMISSIONS FROM REFERRING NEW AFFILIATES?',
        desc: 'Yes, you can refer a sub-affiliate and get additional earnings for every customer that your sub-affiliate sends to mima.games .'
    },
    {
        title: 'HOW ARE COMMISSIONS CALCULATED?',
        desc: 'Your monthly commission is the percentage of the Net Revenue generated by your referred players. Net Revenue is calculated as the total GGR(Bets-Wins) less direct costs associated with the same referrals, such as bonuses, game provider fees, loyalty rewards, transaction fees, and chargebacks/refunds.'
    },
    {
        title: 'HOW DO I GET THE COMMISSIONS?',
        desc: "MiMa Games calculates commissions at the beginning of each month for the previous month's activity and transfers the commission within the first 2 weeks of each month."
    },
    {
        title: 'DO NEGATIVE BALANCES CARRY OVER?',
        desc: "We offer no negative carry-over policy. Your negative balance will be reset to 0 on the 1st of each month."
    },
    {
        title: 'HOW CAN I CLOSE MY ACCOUNT?',
        desc: 'To close your MiMa Affiliates account, send an email request to affiliates@mima-poker.com . Please ensure that you provide us with your affiliate ID, your first and last name.'
    },
    {
        title: 'HOW CAN I CONTACT YOU?',
        desc: 'You can contact us anytime by this email: affiliates@mima-poker.com'
    }
]

const Faq = () => {
    return (
        <div className='con-6'>
        <div className='faq-section'>
          <div className='faq-item-wrap'>
            <div className='faq-header'>
                <h3 className = 'title-top'>faq</h3>
            </div>
            {FAQ.map((item, index) => (
              <FaqItem key={index} item={item} index = {index}/>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Faq;