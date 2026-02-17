// articles.js
import prepaidArticles from './articles/prepaid/index.js';
import postpaidArticles from './articles/postpaid/index.js';
import servicesArticles from './articles/services/index.js';
import prebundlesArticles from './articles/prebundles/index.js';
import postbundlesArticles from './articles/postbundles/index.js';
import prepostbundlesArticles from './articles/prepostbundles/index.js';
import adslArticles from './articles/ADSL/index.js';
import cashmobileArticles from './articles/cashMobile/index.js';

const articles = {
    prepaid: prepaidArticles,
    postpaid: postpaidArticles,
    services: servicesArticles,
    // prebundles: prebundlesArticles,
    // postbundles:postbundlesArticles,
    // prepostbundles: prepostbundlesArticles,
    // adsl:adslArticles,
    cashmobile:cashmobileArticles,
};

// تصدير المتغير articles ليكون متاحاً في ملفات أخرى
export default articles;

// const articles = {
//     prepaid: [
//         {
//             id: "prepaid-1",
//             title: "How to Top Up Your Prepaid Account",
//             excerpt: "Multiple ways to add credit to your prepaid account and avoid service interruption.",
//             content: `
//                         <p>Keeping your prepaid account topped up is essential to avoid service interruption. There are several convenient ways to add credit to your prepaid account:</p>
                        
//                         <h3>1. Online Top-Up</h3>
//                         <p>The easiest way to add credit is through our mobile app or website:</p>
//                         <ol>
//                             <li>Log in to your account</li>
//                             <li>Navigate to the 'Top-Up' section</li>
//                             <li>Select the amount you want to add</li>
//                             <li>Choose your payment method (credit card, debit card, or PayPal)</li>
//                             <li>Confirm the transaction</li>
//                         </ol>
//                         <p>Your credit will be added instantly after payment confirmation.</p>
                        
//                         <h3>2. Retail Stores</h3>
//                         <p>You can purchase top-up cards at thousands of retail locations:</p>
//                         <ul>
//                             <li>Convenience stores (7-Eleven, Circle K)</li>
//                             <li>Supermarkets (Walmart, Target)</li>
//                             <li>Drugstores (CVS, Walgreens)</li>
//                             <li>Our branded stores</li>
//                         </ul>
//                         <p>Simply scratch off the PIN code and follow the instructions to redeem.</p>
//                     `,
//             date: "Jun 15, 2023",
//             image: "linear-gradient(135deg, #ffcc00, #e6b800)"
//         },
//         {
//             id: "prepaid-2",
//             title: "Prepaid Data Packages Comparison",
//             excerpt: "Find the best data package that suits your browsing habits and budget.",
//             content: `
//                         <p>If you consume large amounts of data, choosing the right prepaid plan is crucial. We've analyzed our offerings to help you find the perfect match.</p>
                        
//                         <h3>Unlimited Data Plans</h3>
//                         <p>Our unlimited data plans offer the best value for heavy users:</p>
//                         <ul>
//                             <li><strong>Premium Unlimited:</strong> Truly unlimited data at high speeds (50GB priority data)</li>
//                             <li><strong>Value Unlimited:</strong> 25GB of high-speed data, then unlimited at 3Mbps</li>
//                             <li><strong>Basic Unlimited:</strong> 15GB of high-speed data, then unlimited at 1.5Mbps</li>
//                         </ul>
//                     `,
//             date: "Jun 5, 2023",
//             image: "linear-gradient(135deg, #ff9900, #e68a00)"
//         },
//         {
//             id: "prepaid-3",
//             title: "International Roaming for Prepaid Users",
//             excerpt: "Stay connected abroad with our prepaid international roaming options.",
//             content: `
//                         <p>Traveling abroad doesn't mean you have to lose connectivity. Our prepaid international roaming options let you stay connected wherever you go.</p>
                        
//                         <h3>How It Works</h3>
//                         <p>Activating international roaming on your prepaid account is simple:</p>
//                         <ol>
//                             <li>Ensure you have sufficient balance in your account</li>
//                             <li>Activate the roaming feature through our app or website</li>
//                             <li>Select your destination country</li>
//                             <li>Choose a roaming package that fits your needs</li>
//                         </ol>
//                     `,
//             date: "May 28, 2023",
//             image: "linear-gradient(135deg, #ffcc00, #cc9900)"
//         }
//     ],
//     postpaid: [
//         {
//             id: "postpaid-1",
//             title: "Understanding Your Postpaid Bill",
//             excerpt: "A detailed breakdown of charges and fees on your monthly statement.",
//             content: `
//                         <p>Your postpaid bill is more than just a statement of charges - it's a detailed breakdown of your mobile usage and services. Understanding each component can help you manage your expenses better and make informed decisions about your mobile plan.</p>
                        
//                         <h3>Bill Components Explained</h3>
//                         <p>Your monthly bill consists of several sections:</p>
//                         <ul>
//                             <li><strong>Plan Charges:</strong> The base cost of your selected plan</li>
//                             <li><strong>Usage Charges:</strong> Costs for services beyond your plan limits</li>
//                             <li><strong>Device Installments:</strong> If you're paying for a device over time</li>
//                             <li><strong>Add-ons & Features:</strong> Premium services you've activated</li>
//                             <li><strong>Taxes & Fees:</strong> Government-mandated charges</li>
//                         </ul>
//                     `,
//             date: "May 25, 2023",
//             image: "linear-gradient(135deg, #ff0000, #cc0000)"
//         },
//         {
//             id: "postpaid-2",
//             title: "Family Plans: Share Data & Save Money",
//             excerpt: "How to maximize savings with our family shared plans.",
//             content: `
//                         <p>Family plans are an excellent way to share data and save money on your mobile services. With our family shared plans, you can connect multiple devices under a single account with shared data and minutes.</p>
                        
//                         <h3>Benefits of Family Plans</h3>
//                         <ul>
//                             <li><strong>Cost Savings:</strong> Save up to 30% compared to individual plans</li>
//                             <li><strong>Shared Data:</strong> Pool data across all devices</li>
//                             <li><strong>Unlimited Talk & Text:</strong> For all lines on the plan</li>
//                             <li><strong>Single Bill:</strong> Manage all lines with one convenient bill</li>
//                         </ul>
//                     `,
//             date: "May 18, 2023",
//             image: "linear-gradient(135deg, #cc0000, #990000)"
//         }
//     ],
//     services: [
//         {
//             id: "services-1",
//             title: "Troubleshooting Network Issues",
//             excerpt: "Step-by-step guide to resolving common network problems.",
//             content: `
//                         <p>Experiencing network issues can be frustrating, but many common problems can be resolved with simple troubleshooting steps. Follow this guide to get back online quickly.</p>
                        
//                         <h3>Basic Troubleshooting Steps</h3>
//                         <p>Start with these simple solutions:</p>
//                         <ol>
//                             <li><strong>Restart your device:</strong> This resolves many temporary glitches</li>
//                             <li><strong>Check for outages:</strong> Visit our service status page to see if there's an outage in your area</li>
//                             <li><strong>Toggle Airplane Mode:</strong> Turn on for 30 seconds, then turn off</li>
//                             <li><strong>Check your signal:</strong> Move to a different location if you're in a weak signal area</li>
//                         </ol>
//                     `,
//             date: "Jun 10, 2023",
//             image: "linear-gradient(135deg, #00678f, #004d6f)"
//         },
//         {
//             id: "services-2",
//             title: "How to Set Up Call Forwarding",
//             excerpt: "Redirect your calls to another number with our easy setup guide.",
//             content: `
//                         <p>Call forwarding allows you to redirect incoming calls to another phone number, ensuring you never miss an important call. Here's how to set it up:</p>
                        
//                         <h3>Setting Up Call Forwarding</h3>
//                         <p>You can activate call forwarding in several ways:</p>
//                         <ol>
//                             <li><strong>Using your phone settings:</strong> Go to Settings > Phone > Call Forwarding</li>
//                             <li><strong>Using dial codes:</strong> Dial *72 + the number you want to forward to</li>
//                             <li><strong>Through our mobile app:</strong> Go to Services > Call Forwarding</li>
//                         </ol>
//                     `,
//             date: "Jun 2, 2023",
//             image: "linear-gradient(135deg, #0088cc, #006699)"
//         },
//         {
//             id: "services-3",
//             title: "Setting Up Voicemail",
//             excerpt: "Learn how to configure and use your voicemail service effectively.",
//             content: `
//                         <p>Voicemail is an essential service that allows callers to leave messages when you're unavailable. Setting up your voicemail is quick and easy.</p>
                        
//                         <h3>Initial Setup</h3>
//                         <p>To set up your voicemail for the first time:</p>
//                         <ol>
//                             <li>Press and hold the 1 key on your phone's dial pad</li>
//                             <li>Follow the voice prompts to create a password</li>
//                             <li>Record your personal greeting</li>
//                             <li>Confirm your settings</li>
//                         </ol>
//                     `,
//             date: "May 22, 2023",
//             image: "linear-gradient(135deg, #0099cc, #0077aa)"
//         }
//     ]
// };

