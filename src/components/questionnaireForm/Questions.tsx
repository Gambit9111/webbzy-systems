export type Question = {
    id: string;
    label: string;
    section?: boolean
  };

  const questions: Question[] = [

    // ? BUSINESS INFO
    { id: 'section1', label: 'Business Info', section: true },
    { id: 'businessInfo1', label: 'What is the name of the company?' },
    { id: 'businessInfo2', label: 'What is the core activity or purpose of the company?' },
    { id: 'businessInfo3', label: 'What makes the company unique or distinctive?' },
    { id: 'businessInfo4', label: 'What is the company`s mission and vision?' },

    // ? WEBSITE OBJECTIVES
    { id: 'section2', label: 'Website Objectives', section: true },
    { id: 'websiteObjectives1', label: 'What are the main objectives of the website? (e.g., to inform, to sell products/services, to generate leads)' },
    { id: 'websiteObjectives2', label: 'Who is the target audience or intended users of the website?' },

    // ? DOMAIN INFO
    { id: 'section3', label: 'Domain Info', section: true },
    { id: 'domainInfo1', label: 'What is the desired domain name for the website?' },
    { id: 'domainInfo2', label: 'What could be the alternatives if the desired domain name is not available?' },
    { id: 'domainInfo3', label: 'Does the client already have a registered domain name for their business?' },
    { id: 'domainInfo4', label: 'Are there any specific domain name extensions (TLDs) that the client prefers or wants to avoid (e.g., .com, .net, .org)?' },
    { id: 'domainInfo5', label: 'Does the client want to register multiple domain names to protect their brand or target different markets?' },
    { id: 'domainInfo6', label: 'Are there any trademark or legal considerations related to the domain name that the client needs to address?' },
    { id: 'domainInfo7', label: 'Is the client interested in purchasing an already registered domain name from a third party, if it aligns with their brand and objectives?' },
    { id: 'domainInfo8', label: 'Does the client require assistance with domain name registration and configuration, or do they have in-house resources to handle it?' },

    // ? DESIGN AND BRANDING
    { id: 'section4', label: 'Design And Branding', section: true },
    { id: 'designAndBranding1', label: 'Does the company have existing branding guidelines, such as a logo, color scheme, or specific fonts?' },
    { id: 'designAndBranding2', label: 'Are there any specific design preferences or examples of websites that the client likes?' },
    { id: 'designAndBranding3', label: 'Are there any specific design elements or features that should be included or avoided?' },
    { id: 'designAndBranding4', label: 'Are there any visual elements, such as images or icons, that the client wants to incorporate?' },

    // ? CONTENT
    { id: 'section5', label: 'Content', section: true },
    { id: 'content1', label: 'What pages or sections does the client envision for the website? (e.g., Home, About Us, Services, Portfolio, Contact)' },
    { id: 'content2', label: 'How would the client like the website`s structure and navigation to be organized?' },
    { id: 'content3', label: 'Are there any specific menu items or sections that should be included in the website`s navigation?' },
    { id: 'content4', label: 'Will the client provide the content for the website, or is content creation and copywriting needed?' },
    { id: 'content5', label: 'Will the client need to integrate multimedia elements such as videos, image galleries, or audio files into the website?' },

    // ? FUNCTIONALITY AND FEATURES
    { id: 'section6', label: 'Functionality and Features', section: true },
    { id: 'functionalityAndFeatures1', label: 'What specific functionality does the client require on the website? (e.g., contact forms, e-commerce integration, blog, image galleries)' },
    { id: 'functionalityAndFeatures2', label: 'Are there any third-party integrations or systems that need to be connected to the website?' },
    { id: 'functionalityAndFeatures3', label: 'Are there any specific functionalities or elements that should be adjusted for mobile users?' },

    // ? COMPETITORS
    { id: 'section7', label: 'Competitors', section: true },
    { id: 'competitors1', label: 'Who are the main competitors of the client?' },
    { id: 'competitors2', label: 'Are there any specific competitor websites that the client likes or wants to differentiate from?' },

    // ? TIMELINE AND BUDGET
    { id: 'section9', label: 'Timeline And Budget', section: true },
    { id: 'timelineAndBudget1', label: 'What is the desired timeline for completing the website?' },
    { id: 'timelineAndBudget2', label: 'Does the client have a specific budget range in mind for the project?' },

    // ? CALL TO ACTION
    { id: 'section10', label: 'Call To Action', section: true },
    { id: 'cta1', label: 'Are there specific actions or goals the client wants visitors to take on the website? (e.g., filling out a contact form, subscribing to a newsletter)' },
    { id: 'cta2', label: 'Are there any specific calls-to-action that should be emphasized?' },

    // ? SEO OPTIMIZATION
    { id: 'section11', label: 'Seo Optimization', section: true },
    { id: 'seo1', label: 'Does the client have any specific keywords or phrases they want to target for search engine optimization?' },
    { id: 'seo2', label: 'Are there any specific SEO requirements or considerations to keep in mind?' },
    { id: 'seo3', label: 'If the client operates in a specific location, do they want to optimize the website for local search results?' },
    { id: 'seo4', label: 'Are there any specific local keywords or location-based targeting requirements?' },
    // Add more questions to the array as needed

    // ? ANALYTICS AND TRACKING
    { id: 'section12', label: 'Analytics And Tracking', section: true },
    { id: 'analyticsAndTracking1', label: 'What actions or conversions does the client want visitors to take on the website? (e.g., making a purchase, filling out a form, subscribing to a newsletter)' },
    { id: 'analyticsAndTracking2', label: 'Does the client want to integrate any analytics or tracking tools, such as Google Analytics, to monitor website performance?' },
    { id: 'analyticsAndTracking3', label: 'Are there any specific metrics or goals the client wants to track? (e.g., conversions, traffic, engagement)' },
    { id: 'analyticsAndTracking4', label: 'How will the client define success for the website project?' },

    // ? CMS
    { id: 'section13', label: 'Cms', section: true },
    { id: 'cms1', label: 'Does the client need CMS integration into the website?' },
    { id: 'cms2', label: 'Is the client familiar with using a CMS, or will training be needed?' },

    // ? WEBSITE MAINTENANCE AND SUPPORT
    { id: 'section14', label: 'Website Maintenance And Support', section: true },
    { id: 'websiteMaintenanceAndSupport1', label: 'Will the client require ongoing maintenance and support services after the website is launched?' },
    { id: 'websiteMaintenanceAndSupport2', label: 'What level of support or maintenance does the client expect?' },

    // ? TARGETED LOCATIONS
    { id: 'section15', label: 'Targeted Locations', section: true },
    { id: 'targetedLocations1', label: 'Are there specific geographical locations or regions that the client wants to target with the website?' },
    { id: 'targetedLocations2', label: 'Are there any language considerations or localization requirements?' },

    // ? SOCIAL MEDIA INTEGRATION
    { id: 'section16', label: 'Social Media Integration', section: true },
    { id: 'socialMediaIntegration1', label: 'Does the client have existing social media accounts that need to be integrated into the website?' },

    // ? TESTIMONIALS AND REVIEWS
    { id: 'section17', label: 'Testimonials And Reviews', section: true },
    { id: 'testimonialsAndReviews1', label: 'Does the client want to include testimonials or customer reviews on the website?' },
    { id: 'testimonialsAndReviews2', label: 'Are there any specific platforms or sources from which testimonials should be collected?' },

    // ? CONTENT UPDATES AND BLOGGING
    { id: 'section18', label: 'Content Updates And Bloggin', section: true },
    { id: 'contentUpdatesAndBlogging1', label: 'Will the client require a blog or news section on the website for regular content updates?' },
    { id: 'contentUpdatesAndBlogging2', label: 'Does the client have a content strategy or topics in mind for blog posts or news articles?' },
    { id: 'contentUpdatesAndBlogging3', label: 'Who is the target audience for the websites content, and what are their preferences and needs?' },

    // ? CLIENT INVOLVEMENT
    { id: 'section19', label: 'Client Involvement', section: true },
    { id: 'clientInvolvement1', label: 'How involved does the client want to be in the website development process, and what level of collaboration is expected?' }
  ];

export default questions;