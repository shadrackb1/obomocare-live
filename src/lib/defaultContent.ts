export const defaultContent = {
  pages: {
    home: {
      hero: {
        title: 'Delivering care.\nRestoring dignity.',
        subtitle:
          'We bring aid to the households formal systems keep missing in Kisii and Nyamira.',
        ctaText: 'See Our Impact',
        ctaLink: '/impact',
        ctaSecondaryText: 'Community Engagement',
        ctaSecondaryLink: '/community-engagement',
      },
      stats: [
        { value: '5000', suffix: '+', label: 'Families Served' },
        { value: '120', suffix: '+', label: 'Volunteers' },
        { value: '15', suffix: '', label: 'Communities' },
        { value: '100', suffix: '%', label: 'Transparent' },
      ],
      ticker: [
        'Zero Administrative Fees',
        'Community Driven',
        'Grassroots Impact',
        '100% Transparent',
      ],
      pillars: [
        {
          title: 'Food Support',
          description:
            'Providing nutritious staples to combat food insecurity in vulnerable households.',
          icon: 'Utensils',
          link: '/programs/food-support',
          linkText: 'Learn more',
        },
        {
          title: 'Transport',
          description:
            'Ensuring access to medical facilities and essential services for those with limited mobility.',
          icon: 'Car',
          link: '/programs/volunteer-corps',
          linkText: 'Learn more',
        },
        {
          title: 'Personal Care',
          description:
            'Delivering hygiene kits and basic medical supplies to maintain health and dignity.',
          icon: 'ShieldPlus',
          link: '/programs/maternal-health',
          linkText: 'Learn more',
        },
        {
          title: 'Companionship',
          description:
            'Regular visits by volunteers to combat isolation and provide emotional support.',
          icon: 'HeartHandshake',
          link: '/programs/elderly-support',
          linkText: 'Learn more',
        },
      ],
      sectionTitles: {
        workInActionTitle: 'Our Work in Action',
        workInActionSubtitle:
          'Real moments from the communities we serve across Kisii and Nyamira.',
      },
      workInActionItems: [
        { imageId: 'foodSupportDetail', overlayLabel: 'Food Distribution' },
        { imageId: 'volunteerCorpsDetail', overlayLabel: 'Volunteer Training' },
        { imageId: 'maternalHealthDetail', overlayLabel: 'Maternal Health' },
        { imageId: 'story1', overlayLabel: 'Community Impact' },
        { imageId: 'elderlySupportDetail', overlayLabel: 'Elderly Care' },
      ],
    },
    about: {
      hero: {
        eyebrow: 'OUR STORY',
        title: 'Empowering Communities,\nRestoring Dignity.',
        subtitle:
          'We believe in grassroots change. What started as a local response has grown into a movement of hope and sustainable action.',
      },
      mission: {
        title: 'Our Mission',
        paragraphs: [
          'To deliver immediate relief and foster long-term resilience in underserved communities through targeted, community-led initiatives that prioritize human dignity and sustainable development.',
        ],
      },
      vision: {
        title: 'Our Vision',
        paragraphs: [
          'A world where every community possesses the resources, knowledge, and agency to thrive independently, free from the cycles of poverty and vulnerability.',
        ],
      },
      values: [
        {
          title: 'Grassroots First',
          description:
            'Every solution is designed by and for the community it serves.',
        },
        {
          title: 'Dignity Always',
          description:
            'We treat every person we serve with the respect they deserve.',
        },
        {
          title: 'Radical Transparency',
          description:
            'Zero administrative fees on public donations — private donors cover all our operating costs.',
        },
      ],
      founder: {
        name: 'Mama Kerubo',
        label: 'Founder',
        imageId: 'aboutFounder',
        sectionLabel: 'The Beginning',
        sectionTitle: 'Born from Necessity in March 2020.',
        paragraphs: [
          "When the world stopped in March 2020, the silence in our streets wasn't just fear—it was hunger. As markets closed and daily wages vanished, Mama Kerubo saw families in her neighborhood skipping meals to survive the initial lockdowns.",
          'What began as a single pot of maize and beans shared over a fence quickly became a lifeline. Neighbors brought what little they had to contribute. Within weeks, that one pot grew into a community kitchen feeding hundreds of vulnerable families daily, operating entirely on trust and mutual support.',
          'OBOMOCARE was formalized not out of a desire to create an institution, but to protect and scale that initial spark of community solidarity. Today, we carry that same grassroots ethos into structured programs that address not just immediate hunger, but long-term economic resilience.',
        ],
        quote:
          "\"We didn't have much, but we had each other. Sometimes, that is the most powerful resource of all.\"",
      },
      cta: {
        title: 'Join Our Mission',
        description:
          'Whether you want to volunteer your time, make a donation, or partner with us, your contribution directly impacts rural communities.',
        buttonText: 'Make a Donation',
        buttonLink: '/get-involved',
        secondaryButtonText: 'Become a Volunteer',
        secondaryButtonLink: '/volunteer',
      },
    },
    programs: {
      hero: {
        title: 'Targeted Interventions.\nTangible Results.',
        subtitle:
          'A comprehensive overview of our 4 service pillars designed to provide holistic support and empower communities through sustainable action.',
      },
      cards: [
        {
          id: 'food-support',
          slug: 'food-support',
          icon: 'Utensils',
          title: 'Food Support',
          shortDescription:
            'Bi-weekly food baskets providing essential nutrition to vulnerable households, ensuring food security and stability.',
          imageId: 'foodSupport',
          link: '/programs/food-support',
        },
        {
          id: 'maternal-health',
          slug: 'maternal-health',
          icon: 'ShieldPlus',
          title: 'Maternal Health',
          shortDescription:
            'Compassionate home-based dignity visits delivering personalized care, hygiene support, and maintaining quality of life.',
          imageId: 'maternalHealth',
          link: '/programs/maternal-health',
        },
        {
          id: 'household-care',
          slug: 'household-care',
          icon: 'HeartHandshake',
          title: 'Household Care',
          shortDescription:
            'Assistance with daily living activities for the elderly and disabled, enabling them to live comfortably at home.',
          imageId: 'householdCare',
          link: '/programs/household-care',
        },
        {
          id: 'volunteer-corps',
          slug: 'volunteer-corps',
          icon: 'Car',
          title: 'Volunteer Corps',
          shortDescription:
            'Training and deploying dedicated community members to provide essential support and transportation for those in need.',
          imageId: 'volunteerCorps',
          link: '/programs/volunteer-corps',
        },
      ],
      cta: {
        title: 'Ready to make an impact?',
        description:
          'Your support directly enables these programs to reach more communities in need.',
        buttonText: 'Support Our Programs',
        buttonLink: '/get-involved',
        secondaryButtonText: 'Become a Volunteer',
        secondaryButtonLink: '/get-involved',
      },
    },
    programDetail: {
      badge: 'Program Detail',
      ctaPrimaryText: 'Support this Initiative',
      ctaPrimaryLink: '/get-involved',
      ctaSecondaryText: 'Read Case Studies',
      ctaSecondaryLink: '/stories',
      challengeHeading: 'The Challenge & Our Response',
      challengeIntro:
        'Rural communities often face insurmountable barriers to basic healthcare. We are changing that narrative through direct, sustained action.',
      supportHeading: 'Support this Initiative',
      supportText:
        'Your contribution directly funds mobile clinics, essential medical supplies, and trained professionals. Join us in making safe maternal care a reality for every community.',
    },
    impact: {
      hero: {
        eyebrow: 'Real-time Impact',
        title: 'Measuring True Change.',
        subtitle:
          'Data-driven transparency for every life touched in the Gusii Region.',
        buttonText: 'Download 2024 Transparency Report',
      },
      stats: [
        { value: '24,500', suffix: '', label: 'Lives Impacted' },
        { value: '18', suffix: '', label: 'Active Programs' },
        { value: '100', suffix: '%', label: 'Donation Efficiency' },
      ],
      sectionTitle: 'Five Years of Growth',
      sectionSubtitle:
        'Tracking our sustained commitment to increasing household support over time.',
      chartBarTitle: 'Households Reached (Annual)',
      chartLineTitle: 'Cumulative Community Funding ($)',
      chartBarData: [
        { year: '2020', households: 1200 },
        { year: '2021', households: 2500 },
        { year: '2022', households: 4800 },
        { year: '2023', households: 7500 },
        { year: '2024', households: 12000 },
      ],
      chartLineData: [
        { year: '2020', funding: 50000 },
        { year: '2021', funding: 150000 },
        { year: '2022', funding: 320000 },
        { year: '2023', funding: 600000 },
        { year: '2024', funding: 1200000 },
      ],
    },
    stories: [
      {
        id: '1',
        category: 'News & Impact',
        readTime: '5 min read',
        title: 'Five Years, Zero International Funding',
        excerpt:
          'How a grassroots model of self-sustainability has allowed OBOMOCARE to thrive independently, focusing solely on community-driven solutions rather than donor mandates.',
        fullText: [
          'On March 12, 2020, Kenya joined the world in shutting down. With borders closed and livelihoods frozen, the people of Kisii and Nyamira faced a quiet crisis: hunger.',
          'While international agencies scrambled to mobilize, OBOMOCARE was already in motion. Because we had no foreign funding to lose, no bureaucracy to navigate — we simply showed up.',
          'For five years, every dollar has come from Kenyans. Every meal delivered, every clinic staffed, every elder visited — funded by community contributions, operating on trust, measured in lives touched.',
          'Zero international funding is not a limitation. It is a philosophy. It means we answer only to the communities we serve.',
        ],
        stats: [
          { value: '$0', label: 'International Funding' },
          { value: '100%', label: 'Community Funded' },
          { value: '5+', label: 'Years Running' },
        ],
        imageId: 'story1',
        featured: true,
      },
      {
        id: '2',
        category: 'Program Update',
        readTime: '8 min read',
        title: 'Building a Caregiver Corps',
        excerpt:
          'Inside the rigorous training program that transforms local volunteers into highly skilled caregivers, creating a sustainable health infrastructure from the ground up.',
        fullText: [
          'Before becoming a caregiver, Agnes Kerubo was a mother of four with no formal medical training. Today, she runs our maternal health outreach in Nyamira South.',
          'Our six-week training program covers first aid, patient transport, basic diagnostics, and community health advocacy — all taught by certified nurses and experienced caregivers.',
          'Since launching the Corps, we have certified 120+ volunteers across 15 communities. Each one is equipped with a kit, a bicycle, and a commitment to their neighbors.',
          'The goal is not to replace clinics. The goal is to ensure no one falls through the cracks between them.',
        ],
        stats: [
          { value: '120+', label: 'Trained Volunteers' },
          { value: '6', label: 'Week Training' },
          { value: '15', label: 'Communities Served' },
        ],
        imageId: 'story2',
        featured: false,
      },
      {
        id: '3',
        category: 'Interview',
        readTime: '15 min read',
        title: 'The Frontline of Maternal Health',
        excerpt:
          'An in-depth conversation with Dr. Amina on the daily realities, challenges, and quiet victories of delivering maternal care in underserved regions.',
        fullText: [
          '"Some mornings I walk three hours before I see my first patient. The roads wash out during the rains. But I know that if I don\'t go, no one else will." — Dr. Amina',
          'Dr. Amina joined OBOMOCARE in 2021 after running a private clinic in Kisii Town for 15 years. She now leads our mobile maternal health program.',
          'The challenges are logistical and deeply human. We are talking about women who have never seen a doctor, who deliver on dirt floors, who walk hours for antenatal care.',
          'What keeps us going is watching mothers hold healthy babies. That moment — that is everything.',
        ],
        stats: [
          { value: '800+', label: 'Mothers Served' },
          { value: '40%', label: 'Fewer Emergencies' },
          { value: '24/7', label: 'Mobile Access' },
        ],
        imageId: 'story3',
        featured: false,
      },
    ],
    news: [
      {
        id: '1',
        date: 'August 15, 2023',
        category: 'Program Update',
        title: 'New Mobile Clinic Deployed in Nyamira',
        excerpt:
          'Thanks to our generous partners, we have successfully launched our third mobile clinic, extending our maternal health reach by 30%.',
        content:
          'The new clinic vehicle was purchased entirely through local donations and arrived in Nyamira on August 10th. It will serve as a rotating mobile unit, visiting six communities on a two-week cycle.',
        imageId: 'news1',
      },
      {
        id: '2',
        date: 'July 22, 2023',
        category: 'Community',
        title: 'Volunteer Training Cohort 4 Graduates',
        excerpt:
          '45 new local volunteers have completed their extensive caregiver and first responder training program.',
        content:
          'Cohort 4 represents our largest class yet, with 45 certified volunteers from Kisii South, Nyamira North, and Ekerubo. Each received a full caregiver kit and a community assignment.',
        imageId: 'news2',
      },
      {
        id: '3',
        date: 'June 10, 2023',
        category: 'Impact',
        title: 'Emergency Food Drive Reaches 500 Families',
        excerpt:
          'Following the recent dry spell, our rapid response team distributed over 10 tons of nutritional supplies to affected households.',
        content:
          'Within 72 hours of the dry spell alert, our logistics team coordinated with local farmers to source 10+ tons of maize, beans, and fortified flour. 500 households received two-week rations.',
        imageId: 'news3',
      },
    ],
    faq: [
      {
        id: 'faq1',
        question: 'What exactly does OBOMOCARE CBO do?',
        answer:
          'We run four core programs: Food Support (bi-weekly food baskets), Maternal Health (home-based care visits), Household Care (assistance for elderly and disabled), and the Volunteer Caregiver Corps (training local first responders). We operate in Kisii and Nyamira counties, Kenya.',
      },
      {
        id: 'faq2',
        question: 'How are my donations used?',
        answer:
          '100% of public donations go directly to the field. Private donors fully cover our operating costs, ensuring every shilling you give buys food, medicine, or supplies for the families who need it most.',
      },
      {
        id: 'faq3',
        question: 'Are you an NGO, LLC, or CBO?',
        answer:
          'We are a registered Community Based Organization (CBO) in Kenya. We are not an NGO, we are not a charity — we are neighbors helping neighbors.',
      },
      {
        id: 'faq4',
        question: 'Can I volunteer if I don\'t have medical training?',
        answer:
          'Absolutely. We need logistics coordinators, distribution assistants, administrative support, and companions for our elderly program. Medical training is required only for clinical roles.',
      },
      {
        id: 'faq5',
        question: 'How do you select the families who receive support?',
        answer:
          'We work with local chiefs, community health volunteers, and an unbiased needs-assessment criteria to identify the most vulnerable households. No one is turned away based on politics, religion, or tribe.',
      },
    ],
    partners: [
      { id: '1', name: 'Global Health Initiative', category: 'Medical Supply Partner', imageId: '' },
      { id: '2', name: 'Kenya Food Bank Network', category: 'Logistics & Supply', imageId: '' },
      { id: '3', name: 'Foundation for Rural Development', category: 'Grant Funder', imageId: '' },
      { id: '4', name: 'Nyamira Community Council', category: 'Local Governance', imageId: '' },
      { id: '5', name: 'East African Transport Co.', category: 'Mobility Sponsor', imageId: '' },
      { id: '6', name: 'Tech for Good Africa', category: 'Technology Partner', imageId: '' },
    ],
    gallery: [
      { id: 'g1', url: '', caption: 'Food distribution day — Kisii South', category: 'food', featured: true },
      { id: 'g2', url: '', caption: 'Volunteer training session', category: 'community', featured: false },
      { id: 'g3', url: '', caption: 'Maternal health outreach clinic', category: 'care', featured: true },
      { id: 'g4', url: '', caption: 'Community meeting at Ekerubo', category: 'community', featured: false },
      { id: 'g5', url: '', caption: 'Elderly care visit — Nyamira', category: 'care', featured: false },
      { id: 'g6', url: '', caption: 'Food basket packaging team', category: 'food', featured: false },
      { id: 'g7', url: '', caption: 'Volunteer corps graduation', category: 'community', featured: true },
      { id: 'g8', url: '', caption: 'Children at nutrition program', category: 'food', featured: false },
    ],
    contact: {
      heading: "Let's Connect.",
      subtitle:
        'Reach out to us to learn more about our work, volunteer opportunities, or how you can make an impact.',
      headingSecondary: 'Get in Touch',
      addressLabel: 'Headquarters',
      address:
        'Ekerubo, Kisii-Nyamira Road (besides Ekerubo SDA Church) P.O. Box 66, 40506, Kebirigo, Nyamira',
      emailLabel: 'Email Us',
      email: 'info@obomocare.com',
      phoneLabel: 'Call Us',
      phone: '+254 (0) 000 000 000',
      formLabels: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        subject: 'Subject',
        message: 'Message',
        submitButton: 'Send Message',
        subjectOptions: ['General Inquiry', 'Volunteering', 'Donations', 'Partnerships'],
      },
      sidebarImageId: 'aboutFounder',
    },
    getInvolved: {
      heroTitle: 'Support a Pillar of Care',
      heroSubtitle:
        'Directly empower the programs and people on the frontlines of community health and support. Your sponsorship builds sustainable resilience.',
      anchorText: 'View Programmes',
      sectionTitle: 'Active Programmes',
      sectionSubtitle:
        'Choose a pillar to support. Every contribution directly funds essential resources, training, and care delivery.',
      programmes: [
        {
          title: 'Elderly Support Programme',
          description:
            'Providing vital home-based medical care, nutritional support, and social companionship to vulnerable elderly community members ensuring they age with dignity.',
          goal: 25000,
          current: 16250,
          percentFunded: 65,
          badge: 'Urgent Need',
          imageId: 'elderlySupport',
          link: '/programs/elderly-support',
          buttonText: 'Learn More',
        },
        {
          title: 'Household Care Programme',
          description:
            'Delivering comprehensive family-level interventions, including sanitation education, essential supplies, and preventative health screenings for the whole household.',
          goal: 40000,
          current: 16800,
          percentFunded: 42,
          badge: 'Important',
          imageId: 'householdCare',
          link: '/programs/household-care',
          buttonText: 'Learn More',
        },
        {
          title: 'Volunteer Caregiver Corps',
          description:
            'Training and equipping local community members with necessary medical knowledge and supplies to act as first responders and continuous caregivers.',
          goal: 15000,
          current: 13200,
          percentFunded: 88,
          badge: 'Critical',
          imageId: 'volunteerCorps',
          link: '/programs/volunteer-corps',
          buttonText: 'Learn More',
        },
      ],
      otherWaysHeading: 'Other Ways to Give',
      otherWaysSubtitle:
        'Prefer to make a direct transfer? Here are our official banking details.',
      bankDetails: {
        sectionHeading: 'Direct Bank Transfer',
        accountName: 'OBOMOCARE CBO',
        bank: 'Equity Bank Kenya',
        branch: 'Kisii Branch',
        accountNumber: '0123456789012',
        mpesaPaybill: '246810',
        mpesaAccount: 'Your Name / Project',
      },
    },
    volunteer: {
      heroTitle: 'Become a Volunteer',
      heroSubtitle:
        'Join our grassroots network of dedicated individuals driving change from within their own communities.',
      heroHighlight: 'Volunteer',
      whyTitle: 'Why Volunteer with Us?',
      features: [
        {
          title: 'Direct Community Impact',
          text: 'Your time directly benefits families in need, with no administrative bureaucracy in the way.',
        },
        {
          title: 'Professional Training',
          text: 'Receive comprehensive training in first aid, caregiver skills, and community health advocacy.',
        },
        {
          title: 'Flexible Commitment',
          text: 'Whether you have two hours a week or two days a month, we have a role for you.',
        },
      ],
      lifeTitle: 'Life as a Volunteer',
      lifeSubtitle:
        'A glimpse into the daily moments that make volunteering with OBOMOCARE so rewarding.',
      formTitle: 'Volunteer Application Form',
      formSubtitle:
        'Fill out the form below and our coordinator will reach out to you within 48 hours.',
      formLabels: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        areaOfInterest: 'Area of Interest',
        reason: 'Briefly tell us why you want to join',
        submitButton: 'Submit Application',
        successMessage: 'Application submitted successfully! We will contact you soon.',
      },
      interestOptions: [
        'Volunteer Caregiver Corps',
        'Food Distribution Logistics',
        'Elderly Companionship',
        'Administrative Support',
        'Other / Not Sure Yet',
      ],
      ctaTitle: 'Support stories like this',
      ctaText:
        'Your contribution directly fuels our outreach programs, ensuring more communities receive the care they desperately need.',
      ctaButtonText: 'Make a Donation',
      ctaLink: '/get-involved',
    },
    transparency: {
      heroTitle: 'Radical Transparency.\nZero Admin Fees.',
      heroSubtitle:
        'We believe trust is earned through complete openness. See exactly how every dollar is deployed to maximize impact in the communities we serve.',
      pledgeTitle: 'The 100% Pledge',
      pledgeText:
        'Private donors cover our operating costs so 100% of your public donation goes directly to the field. We operate with lean administration to ensure maximum resources reach the programs that need them most.',
      pledgeItems: [
        'Zero overhead deducted from public funds.',
        'Independent annual audits by top-tier firms.',
        'Real-time tracking of project expenditures.',
      ],
      budgetTitle: '2024 Operating Budget',
      budgetSubtitle: 'Total Projected: USD 1.8M',
      budgetItems: [
        { label: 'Food Security Initiatives', amount: '$810,000', percent: 45 },
        { label: 'Clean Water Infrastructure', amount: '$540,000', percent: 30 },
        { label: 'Medical Relief', amount: '$360,000', percent: 20 },
        { label: 'Admin & Ops (Privately Funded)', amount: '$90,000', percent: 5 },
      ],
      auditTitle: 'Audit Reports',
      auditSubtitle: 'Review our verified financial statements.',
      reports: [
        {
          title: 'Q4 2023 Audit',
          description: 'Independent review of end-of-year financials.',
          buttonText: 'Download PDF',
        },
        {
          title: 'Q3 2023 Audit',
          description: 'Quarterly review of program expenditures.',
          buttonText: 'Download PDF',
        },
        {
          title: '2022 Annual Report',
          description: 'Comprehensive yearly financial breakdown.',
          buttonText: 'Download PDF',
        },
      ],
    },
    team: {
      heroTitle: 'Meet the Team',
      heroSubtitle:
        'Dedicated professionals united by a singular mission: bringing dignified care to those who need it most.',
      sectionTitle: 'Our Team',
      emptyState: 'No team members configured yet.',
      emptyStateSubtext: 'Check back soon!',
      volunteerBanner: 'And over 120 dedicated community volunteers.',
      engagementHeading: 'Community Engagement',
      engagementText:
        "Our team has had the privilege of meeting with Huldah Mományi, the State Representative for District 38A in Minnesota's House of Representatives.",
      engagementButtonText: 'View Engagement Photos',
      engagementButtonLink: '/community-engagement',
    },
    foodSupport: {
      badge: 'Program Detail',
      title: 'Food Support & Nutrition',
      subtitle:
        'Tackling food insecurity head-on through direct delivery of nutrient-dense food baskets to families, ensuring stability and health in times of crisis.',
      ctaPrimaryText: 'Fund a Food Basket',
      ctaPrimaryLink: '/get-involved',
      ctaSecondaryText: 'Read Impact Stories',
      ctaSecondaryLink: '/stories',
      challengeTitle: 'Alleviating Hunger Together',
      challengeIntro:
        'Food security is the foundation of community resilience. Without it, education, health, and economic stability are impossible.',
      challenges: [
        { title: 'The Hunger Gap', text: 'Economic shocks and localized droughts have created severe food shortages, leaving many children and elderly malnourished.' },
        { title: 'Nutritional Deficits', text: 'A lack of balanced diets leads to long-term developmental issues in children and weakened immune systems in adults.' },
      ],
      supportTitle: 'Our Distribution Network',
      supportText: 'We source locally where possible and deliver directly to the most vulnerable households.',
      supportBullets: ['Bi-Weekly Family Baskets', 'Emergency Crisis Rations', 'Nutritional Education'],
      ctaTitle: 'Feed a Family',
      ctaText: 'A small donation can secure a family\'s meals for an entire month. Join our fight against hunger today.',
    },
    householdCare: {
      badge: 'Program Detail',
      title: 'Household Care & Dignity',
      subtitle:
        'Providing essential assistance with daily living activities for the elderly, disabled, and vulnerable individuals, enabling them to live safely and comfortably at home.',
      ctaPrimaryText: 'Support this Initiative',
      ctaPrimaryLink: '/get-involved',
      ctaSecondaryText: 'Read Case Studies',
      ctaSecondaryLink: '/stories',
      challengeTitle: 'The Need for In-Home Care',
      challengeIntro:
        'Many vulnerable individuals cannot access community centers or health clinics. We bring the care directly to their doorstep.',
      challenges: [
        { title: 'Isolation & Mobility', text: 'Physical disabilities and age-related mobility issues often lead to profound social isolation and inability to perform basic tasks.' },
        { title: 'Lack of Support', text: 'Families may be overwhelmed or unavailable, leaving vulnerable individuals without a reliable safety net for daily survival.' },
      ],
      supportTitle: 'Our Care Approach',
      supportText: 'We assign dedicated caregivers who provide consistent, compassionate assistance tailored to each individual\'s needs.',
      supportBullets: ['Hygiene and Personal Care', 'Home Maintenance and Cleaning', 'Companionship and Mental Wellness'],
      ctaTitle: 'Support Household Care',
      ctaText: 'Your contribution ensures that our caregivers can reach more homes, providing essential dignity and support to the most vulnerable.',
    },
    volunteerCorps: {
      badge: 'Program Detail',
      title: 'Volunteer Caregiver Corps',
      subtitle:
        'Mobilizing and training local community members to serve as first responders, caregivers, and logistical support for our outreach missions.',
      ctaPrimaryText: 'Join the Corps',
      ctaPrimaryLink: '/volunteer',
      ctaSecondaryText: 'Meet Our Volunteers',
      ctaSecondaryLink: '/stories',
      challengeTitle: 'Empowering Local Leaders',
      challengeIntro:
        'The most sustainable solutions come from within. We equip locals with the skills they need to care for their own neighbors.',
      challenges: [
        { title: 'Capacity Building', text: 'Without trained personnel on the ground, emergency responses are delayed and routine care is neglected.' },
        { title: 'Logistical Hurdles', text: 'Navigating rural terrain requires local knowledge. Our volunteers provide vital transportation and navigational support.' },
      ],
      supportTitle: 'Our Training Program',
      supportText: 'We offer rigorous training programs to transform passionate individuals into certified community caregivers.',
      supportBullets: ['First Aid & Basic Life Support', 'Patient Transport Coordination', 'Community Health Advocacy'],
      ctaTitle: 'Step Up & Serve',
      ctaText: 'Whether you can offer time, skills, or resources to sponsor a volunteer\'s training kit, your involvement is crucial.',
    },
    elderlySupport: {
      badge: 'Program Detail',
      title: 'Elderly Support',
      subtitle:
        'Providing vital home-based medical care, nutritional support, and social companionship to vulnerable elderly community members.',
      ctaPrimaryText: 'Sponsor an Elder',
      ctaPrimaryLink: '/get-involved',
      ctaSecondaryText: 'Read Their Stories',
      ctaSecondaryLink: '/stories',
      challengeTitle: 'Aging with Dignity',
      challengeIntro:
        'Our elders built our communities. It is our duty to ensure they are cared for with respect, compassion, and comprehensive medical support.',
      challenges: [
        { title: 'Medical Vulnerability', text: 'Chronic conditions are rampant among the elderly in rural areas, yet regular access to medications is incredibly rare.' },
        { title: 'Social Isolation', text: 'Beyond physical health, many elders suffer from severe loneliness. Social companionship is a critical part of holistic care.' },
      ],
      supportTitle: 'Our Support Model',
      supportText: 'We assign dedicated health workers for regular visits, ensuring medication adherence and social connection.',
      supportBullets: ['Routine Health Screenings', 'Medication Delivery & Management', 'Nutritional Supplements'],
      ctaTitle: 'Sponsor a Grandparent',
      ctaText: 'Your sponsorship provides an elderly community member with consistent medical care, food, and companionship.',
    },
  },
  navigation: {
    desktop: [
      { label: 'About', href: '/about' },
      { label: 'Programs', href: '/programs' },
      { label: 'Impact', href: '/impact' },
      { label: 'Stories', href: '/stories' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'Team', href: '/team' },
      { label: 'Community Engagement', href: '/community-engagement' },
      { label: 'Contact', href: '/contact' },
    ],
    mobileExtra: [
      { label: 'News', href: '/news' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Partners', href: '/partners' },
      { label: 'Transparency', href: '/transparency' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  footer: {
    description: 'OBOMOCARE CBO — Delivering care. Restoring dignity.',
    columns: [
      {
        heading: 'Organization',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Programs', href: '/programs' },
          { label: 'Team', href: '/team' },
          { label: 'Community Engagement', href: '/community-engagement' },
          { label: 'Partners', href: '/partners' },
        ],
      },
      {
        heading: 'Get Involved',
        links: [
          { label: 'Volunteer', href: '/volunteer' },
          { label: 'Donate', href: '/get-involved' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'News', href: '/news' },
          { label: 'Stories', href: '/stories' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Transparency', href: '/transparency' },
        ],
      },
    ],
    contact: {
      email: 'info@obomocare.com',
      phone: '+254 (0) 000 000 000',
      address: 'P.O. Box 66, Kebirigo, Nyamira',
    },
  },
  communityEngagement: {
    heading: 'Community Engagement',
    subtitle:
      'Building partnerships and fostering dialogue with leaders who share our vision for community empowerment and transformation.',
    meetings: [
      {
        id: 'meet1',
        title: 'Meeting with Huldah Mományi',
        imageId: 'team_5',
        body: "Naomi Kerubo Akuma and Fredah Kwamboka Onduso meeting with Huldah Mományi, the State Representative for District 38A in Minnesota's House of Representatives. This meeting highlighted the importance of diaspora engagement and community leadership in fostering meaningful connections between Kenya and the United States.",
      },
      {
        id: 'meet2',
        title: 'Leadership Meeting',
        imageId: 'team_6',
        body: "Josephat Mose meeting with Huldah Mományi, the State Representative for District 38A in Minnesota's House of Representatives. The discussion focused on community development initiatives and ways to strengthen partnerships between Obomocare CBO and local government representatives.",
      },
    ],
    aboutTitle: 'About Huldah Mományi',
    aboutText:
      "Huldah Mományi (born 1985) is an American politician serving in the Minnesota House of Representatives since 2025. She is the first Kenyan-American to win a state assembly seat in Minnesota. She was elected under the Democratic-Farmer-Labor party to represent District 38A in the 2025–2026 Minnesota House of Representatives. Her historic election represents a milestone for the Kenyan diaspora, demonstrating the growing influence and political engagement of Kenyan-Americans in American civic life.",
    whyTitle: 'Why This Matters',
    whyText:
      "Diaspora engagement is not charity — it is solidarity. Leaders like Huldah bridge the gap between Kenyan communities abroad and the families back home. These relationships amplify our voice, open institutional doors, and create opportunities we could never reach alone.",
  },
  cta: {
    title: 'Join Our Mission',
    description:
      'Whether you want to volunteer your time, make a donation, or partner with us, your contribution directly impacts rural communities.',
    buttonText: 'Make a Donation',
    buttonLink: '/get-involved',
    secondaryButtonText: 'Become a Volunteer',
    secondaryButtonLink: '/volunteer',
  },
};

export type SiteContent = typeof defaultContent;
export type PageKey = keyof SiteContent['pages'];
