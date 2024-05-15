// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        //footer
        Народы: "Peoples",
        Интерьвью: "Interviews",
        Природа: "Nature",
        Проблемы: "Problems",
        Помочь: "Help",
        
        //section1
        about_us: "About us",
        we_care_about: "We are concerned about the environmental changes happening on our planet:",
        climate_change: "climate change, decrease in biodiversity, threats to unique plants",
        and_animals: "and animals",
        recently_learned: "Recently, we have learned a lot about the indigenous peoples of Russia and how",
        relationships_with_nature: "they build relationships with the surrounding world",

        //section2
        our_mission: "Our Mission",
        mission_statement_1: "The mission of this project is to draw public attention to the indigenous peoples",
        mission_statement_2: "of Russia, their ecological way of life, and practices for preserving the environment with",
        mission_statement_3: "the aim of adopting their ways of interacting with nature to improve",
        mission_statement_4: "the ecological condition of our planet.",
        
        //section3
        indigenous_small_numbered_people_definition: "According to Russian legislation, an indigenous small-numbered people is one that is settled in the territory of their ancestors, inherits traditional methods of management, and whose population does not exceed 50,000 people",
        learn_more: "Learn more",
        game_description: "During the game of kheer shaaglan, a participant must break the spine bone of a bull or cow with the palm. To be able to break the bone, a special technique is used: several trial strikes are made to 'feel' the bone, and then the participant delivers the final, most powerful blow with the back of the palm. This game is part of the traditional culture of the Buryats.",
        game_description_mobile: "During the game of kheer shaaglan, a participant must break the spine bone of a bull or cow with the palm. To be able to break the bone, a special technique is used. This game is part of the traditional culture of the Buryats.",
        indigenous_peoples_challenges: "The difficulty of preserving the language, the disappearance of ancient traditions, threats to national cultures, destruction of ecosystems - these are the problems faced by indigenous peoples not only in Russia but also in other countries. In 1992, the UN adopted the 'Declaration on the Rights of Persons Belonging to National or Ethnic, Religious and Linguistic Minorities', securing the rights of minorities in multi-ethnic states.",
        indigenous_peoples_challenges_mobile: "In 1992, the UN adopted the 'Declaration on the Rights of Persons Belonging to National or Ethnic, Religious and Linguistic Minorities', securing the rights of minorities in multi-ethnic states.",
        indigenous_teaching_quote1: "The indigenous peoples of Russia teach us to live in harmony with nature,",
        indigenous_teaching_quote2: "showing respect for the land and sustainability for future",
        indigenous_teaching_quote3: "generations.",
        author_arseny_karsakov: "Arseny Karsakov",
        our_policy_title: "Our Policy",
        culture_preservation_title: "Culture Preservation",
        culture_preservation_description: "We strive to raise awareness about the indigenous peoples of Russia and their ecological practices, respecting their traditions and rights. Our task is to spread knowledge about sustainable interaction with nature, based on the voices and perspectives of these peoples.",
        educational_interaction_title: "Educational Interaction",
        educational_interaction_description: "Through an interactive quiz, we stimulate the study of the ecological practices of indigenous peoples, fostering a deep understanding and respect for their cultures. We consider education to be the key to ecological sustainability.",
        website_information_title: "Website Information",
        website_information_description: "Created to highlight the lives of indigenous peoples, our website is committed to providing current and respectful information that reflects the latest research. We aim to improve the environmental situation by expanding knowledge of indigenous cultures and practices.",

        //section4
        section4_quote: "Nature can do without man, but not he without it.",
        section4_author: "Ali Apsheron",
        section4_quote_mobile_1: "Nature can do without man,",
        section4_quote_mobile_2: "but not he without it.",

        //section5
        help_title: "You can help",
        help_message: "Protect the people and places you love. Make your contribution today.",
        help_button: "yes - I want to help!",
        help_button_mobile: "Want to help!",


        //footer
        footer_write_to_us: "Write to us",
        footer_email: "russianative@gmail.com",
        footer_description: "We have created a useful site where we have collected information about the indigenous peoples of our country, their problems, and ways of interacting with the environment that are not only effective but also safe for nature.",
        footer_copyright: "© 2024 Indigenous People, Website by Fusion",
        footer_nations_nature: "peoples and nature",
        footer_learn_more: "learn more",
        footer_nations_interview: "peoples and interview",

        //sliderAndQuiz
        check_your_knowledge: 'check your knowledge',
        correct_answers_count: 'Number of correct answers',
        correct_answers_count_from: 'out of',
        test_completed: 'Test completed',

        fact_correct_answer: 'Yes, this is the correct answer.',
        fact_wrong_answer: 'No, this is the wrong answer.',
        fact_indigenous_peoples_count: 'According to the "Unified list of indigenous small-numbered peoples of the Russian Federation", Russia is home to 47 indigenous small-numbered peoples.',
        fact_kereks_population: 'Kereks. During the 2021 All-Russian population census, only 4 people identified themselves as Kereks. This is the correct answer.',

        quiz_question1: 'Question 1',
        quiz_question1_text: 'Do you know how many indigenous small-numbered peoples live in Russia?',
        quiz_question1_option1: 'MORE THAN 50',
        quiz_question1_option2: '193',
        quiz_question1_option3: '47',
        quiz_question1_option4: '29',

        quiz_question2: 'Question 2',
        quiz_question2_text: 'According to recent studies, which people is now down to just 4 individuals?',
        quiz_question2_option1: 'KEREKS',
        quiz_question2_option2: 'YUKAGHIRS',
        quiz_question2_option3: 'ENETS',
        quiz_question2_option4: 'OROCHS',
        
        quiz_question3: 'Question 3',
        quiz_question3_text: 'Vargan, komus, khomus, komys, amanhuur, tumran, zubanka - all these names refer to one important item in the cultural life of the northern peoples. Did you guess what it is?',
        quiz_question3_option1: 'MUSICAL INSTRUMENT',
        quiz_question3_option2: 'BABY CRADLE',
        quiz_question3_option3: 'SMOKING PIPE',
        quiz_question3_option4: 'SPECIAL CEREMONIAL KNIFE',
        
        quiz_question4: 'Question 4',
        quiz_question4_text: 'Representatives of this people live on two continents - Eurasia and North America. The traditional dwelling "valkaran" is a semi-dugout based on a frame of whale bones or fin, covered with dry grass, skins, turf. Known as excellent hunters of whales, seals, sea lions, and walruses. In Russia, they reside in the Kamchatka Krai and on the Commander Islands. Which people are these?',
        quiz_question4_option1: 'EVENKS',
        quiz_question4_option2: 'ALEUTS',
        quiz_question4_option3: 'SAAMI',
        quiz_question4_option4: 'CHUKCHIS',

        //помощь
          problems: "problems of indigenous peoples",
          russian_peoples: "peoples of Russia",
          economic_inequality: "economic inequality and demographic problems",
          climatic_threat: "climatic and environmental threats",
          climatic_threat_text: "Richer communities with more stable institutional structures suffer less from global issues such as warming and plastic pollution. However, the most vulnerable groups within these communities are often indigenous peoples who are committed to traditional ways of life and face difficulties due to changes in the environmental landscape. For example, permafrost melting in Northern Russia causes methane emissions and makes it impossible for indigenous peoples to engage in economic activities, hunting, and fishing.",
          language_threat: "threat to languages",
          language_threat_text: "The demographic problem has serious consequences for the cultures and languages of indigenous minorities. In Russia, 15 languages of small peoples have disappeared over the past 100 years, 10 of them in the last 35 years. Currently, about 10% of the one and a half hundred languages of the peoples of Russia are on the verge of extinction, and more than 60% are approaching this dangerous line. This problem is widespread not only in Russia but all over the world. Teaching indigenous minority languages in schools is also a challenging task, especially due to urbanization and the dominant role of the Russian language. Speaking one's language is an important part of a people's identity, so the extinction of languages leads to a loss of cultural values.",
          principle_free: "principle of free,",
          preliminary_and_conscious: "prior and informed",
          agreement: "consent (FPIC)",
          important_step: "An important step towards respecting the rights of indigenous peoples was the principle of free, prior and informed consent (FPIC). It was adopted as part of the United Nations Declaration on the Rights of Indigenous Peoples in 2007.",
          fpic_suppose: "The FPIC principle assumes that an organization or company must obtain the consent of the indigenous population before starting a project on their territory without administrative or political pressure. The residents must be informed about the possible consequences, and the consent procedure must comply with the norms of the indigenous people's decisions.",
          un_summary: "The UN report notes that one of the first Russian companies to cooperate with the indigenous population in implementing the Sakhalin-2 project in northern Sakhalin was Sakhalin Energy LLC. A Development Assistance Plan for the indigenous small-numbered peoples of northern Sakhalin was developed.",
          fpic_section_2: "The practice of FPIC principles in Russia remains irregular. The optimistic scenario of the Sakhalin plan can rather be considered an exception that confirms the general rule: even now, in the 21st century, after numerous UN reports and conferences, the rights of indigenous peoples in Russia are violated.",
          fpic_cases: "Here are just a few cases where the FPIC principles were not followed:",
          damn_gold: "Cursed Gold of the Shors.",
          damn_gold_section_1: "The Shors, an indigenous people of southern Siberia, live in the Republic of Khakassia and the Kemerovo region; their population is about 14,000 people, but since the mid-20th century, their number has decreased by 14% due to ecosystem destruction and gold mining. In the territory of seven regions of Russia, 279 licensed gold mining sites have been identified, posing a potential threat to the environment and humans.",
          damn_gold_section_2: "The industrial development of the ancestral territories of the Shors, including gold and coal mining, threatens the existence of this people, leading to the disappearance of their culture and language, forcing them to leave their lands and damaging the region's unique biodiversity. The principles of free, prior, and informed consent are not followed due to the informality of many mining sites and the lack of companies willing to take responsibility for the violations of Shors' rights and environmental pollution.",
          damn_gold_section_3: "Thus, adherence to the FPIC principle is an integral part of the rights of indigenous peoples worldwide. FPIC is necessary not only for preserving the unique cultures, languages, and methods of natural resource use of indigenous peoples but also as a practical step in establishing relationships with those groups that have been discriminated against for centuries.",
          dead_rivers: "Dead Rivers of the Mansi people.",
          dead_rivers_text: "Dead rivers such as Taltiya, Ivdel, Shegultan, and Olkhovka of the Mansi people in the Khanty-Mansi Autonomous Okrug and neighboring regions have become unsuitable for natural resource use due to industrial pollution, which hinders the traditional activities of the Mansi, such as fishing, hunting, and reindeer herding.",
          summary: "Conclusion",
          summary_text: "Despite the fact that some companies in Russia comply with FPIC requirements, the decision to adhere to or disregard this principle in most cases remains with the organizations themselves. Considering all the time and monetary costs, as well as the right of indigenous residents to refuse projects on their land, private companies rarely find sufficient grounds for negotiating with indigenous peoples. As a result, arbitrariness occurs on the historical territories of indigenous peoples, resource exploitation, the destruction of unique ecological landscapes, and violations of indigenous peoples' rights to self-determination."
      
      
      
    }
  },
  ru: {
    translation: {
        //section1
        about_us: "О нас",
        we_care_about: "Мы волнуемся за экологические изменения, происходящие на нашей планете:",
        climate_change: "изменение климата, уменьшение биоразнообразия, угроза уникальным растениям",
        and_animals: "и животным",
        recently_learned: "Недавно мы узнали много нового о коренных народах России и о том, какие",
        relationships_with_nature: "отношения с окружающим миром они выстраивают",

        //section2
        our_mission: "Наша миссия",
        mission_statement_1: "Миссия данного проекта - обратить внимание общественности на коренные народы",
        mission_statement_2: "России, их экологичный образ жизни и практики по сохранению окружающей среды с",
        mission_statement_3: "целью перенятия их способов взаимодействия с природой для улучшения",
        mission_statement_4: "экологического состояния нашей планеты.",

        //section3
        indigenous_small_numbered_people_definition: "Согласно российскому законодательству, коренной малочисленный народ — это тот, который расселен на территории расселения своих предков, наследует традиционные методы хозяйствования и чья численность не превышает 50 000 человек.",
        learn_more: "Узнать больше",
        game_description: "Во время игры в хээр шааглан участник должен разбить ладонью хребтовую кость быка или коровы. Чтобы суметь сломать кость, используется специальная техника: делается несколько пробных ударов, чтобы «почувствовать» кость, и потом тыльной стороной ладони участник или участница наносит финальный самый сильный удар по кости. Эта игра — часть традиционной культуры бурятов.",
        game_description_mobile: "Во время игры в хээр шааглан участник должен разбить ладонью хребтовую кость быка или коровы. Чтобы суметь сломать кость, используется специальная техника. Эта игра — часть традиционной культуры бурятов.",
        indigenous_peoples_challenges: "Сложность сохранения языка, исчезновение древних традиций, угроза национальным культурам, разрушение экосистем — с этими проблемами сталкиваются коренные народы не только России, но и других стран. В 1992 году в ООН была принята «Декларация о правах лиц, принадлежащих к национальным или этническим, религиозным и языковым меньшинствам», закреплявшая права меньшинств в многосоставных государствах.",
        indigenous_peoples_challenges_mobile: "В 1992 году в ООН была принята «Декларация о правах лиц, принадлежащих к национальным или этническим, религиозным и языковым меньшинствам», закреплявшая права меньшинств в многосоставных государствах.",
        indigenous_teaching_quote1: "Коренные народы России учат нас жить в гармонии с природой,",
        indigenous_teaching_quote2: "демонстрируя уважение к земле и устойчивость для будущих",
        indigenous_teaching_quote3: "поколений.",
        author_arseny_karsakov: "Карсаков Арсений",
        our_policy_title: "Наша политика",
        culture_preservation_title: "Сохранение культуры",
        culture_preservation_description: "Мы стремимся повышать осведомленность о коренных народах России и их экологических практиках, уважая их традиции и права. Наша задача — распространять знания об устойчивом взаимодействии с природой, опираясь на голоса и перспективы этих народов.",
        educational_interaction_title: "Образовательное взаимодействие",
        educational_interaction_description: "Через интерактивную викторину мы стимулируем изучение экологических практик коренных народов, способствуя глубокому пониманию и уважению к их культурам. Образование считаем ключом к экологической устойчивости.",
        website_information_title: "Информация на сайте",
        website_information_description: "Созданный с целью освещения жизни коренных народов, наш сайт обязуется предоставлять актуальную и уважительную информацию, отражающую последние исследования. Мы стремимся к улучшению экологической ситуации через расширение знаний о коренных культурах и практиках.",

        //section4
        section4_quote: "Природа может обойтись без человека, а он без нее - нет.",
        section4_author: "Али Апшерон",
        section4_quote_mobile_1: "Природа может обойтись без человека,",
        section4_quote_mobile_2: "а он без нее - нет.",

        //section5
        help_title: "Вы можете помочь",
        help_message: "Защитите людей и места, которые вы любите. Сделайте ваш вклад сегодня.",
        help_button: "да - я хочу помочь!",
        help_button_mobile: "Хочу помочь!",

        //footer
        footer_write_to_us: "Напишите нам",
        footer_email: "russianative@gmail.com",
        footer_description: "Мы создали полезный сайт, в котором собрали информацию о коренных жителях нашей страны, их проблемах, а также способах взаимодействия с окружающей средой, которые не только эффективны, но и безопасны для природы.",
        footer_copyright: "© 2024 Коренные Народы, Сайт от Fusion",
        footer_nations_nature: "народы и природа",
        footer_learn_more: "узнать больше",
        footer_nations_interview: "народы и интервью",

        //sliderAndQuiz
        check_your_knowledge: 'проверьте свои знания',
        correct_answers_count: 'Количество правильных ответов',
        correct_answers_count_from: 'из',
        test_completed: 'Вы завершили тест',

        fact_correct_answer: 'Да, это правильный ответ',
        fact_wrong_answer: 'Нет, это неправильный ответ',
        fact_indigenous_peoples_count: 'Согласно "Единому перечню коренных малочисленных народов Российской Федерации" в России проживает 47 коренных малочисленных народов',
        fact_kereks_population: 'Кереки. Во время Всероссийской переписи населения в 2021 году в кереки себя записало всего 4 человека. Это правильный ответ.',

        quiz_question1: 'Вопрос 1',
        quiz_question1_text: 'А вы знаете, сколько коренных малочисленных народов проживает в России?',
        quiz_question1_option1: 'БОЛЬШЕ 50',
        quiz_question1_option2: '193',
        quiz_question1_option3: '47',
        quiz_question1_option4: '29',

        quiz_question2: 'Вопрос 2',
        quiz_question2_text: 'В каком народе, согласно последним исследованиям, насчитывается всего 4 человека?',
        quiz_question2_option1: 'КЕРЕКИ',
        quiz_question2_option2: 'ЮКАГИРЫ',
        quiz_question2_option3: 'ЭНЦЫ',
        quiz_question2_option4: 'ОРОЧИ',
        
        quiz_question3: 'Вопрос 3',
        quiz_question3_text: 'Варган, комус, хомус, комыс, аманхуур, тумран, зубанка - все эти названия обозначают один важный предмет для культурной жизни народов севера. А вы поняли, что это за предмет?',
        quiz_question3_option1: 'МУЗЫКАЛЬНЫЙ ИНСТРУМЕНТ',
        quiz_question3_option2: 'ЛЮЛЬКА ДЛЯ РЕБЕНКА',
        quiz_question3_option3: 'КУРИТЕЛЬНАЯ ТРУБКА',
        quiz_question3_option4: 'СПЕЦИАЛЬНЫЙ ОБРЯДОВЫЙ НОЖ',

        quiz_question4: 'Вопрос 4',
        quiz_question4_text: 'Представители этого народа живут на два континента - Евразию и Северную Америку. Традиционное жилище “валкаран” представляет собой полуземлянку на основе каркаса из костей кита или плавника, укрытую сухой травой, шкурами, дерном. Известны как отличные охотники на китов, морских котиков, каланов и сивучей. В России проживают на территории Камчатского края и на Командорских островах. Что это за народ?',
        quiz_question4_option1: 'ЭВЕНКИ',
        quiz_question4_option2: 'АЛЕУТЫ',
        quiz_question4_option3: 'СААМИ',
        quiz_question4_option4: 'ЧУКЧИ',

        //problems
        problems: 'проблемы коренных',
        russian_peoples: 'народов россии',
        economic_inequality: 'экономическое неравенство и демографические проблемы',
        climatic_threat: 'КЛИМАТИЧЕСКАЯ И ЭКОЛОГИЧЕСКАЯ УГРОЗЫ',
        climatic_threat_text: 'Более богатые сообщества с более стабильными институциональными структурами меньше страдают от глобальных проблем, таких как потепление и загрязнение пластиком. Однако, наиболее уязвимыми группами внутри этих сообществ часто оказываются коренные жители, которые привержены традиционным способам жизни и испытывают сложности из-за изменений в экологическом ландшафте. Например, таяние вечной мерзлоты в Северной России вызывает выбросы метана и делает невозможным хозяйственную деятельность, охоту и рыболовство для коренных народов.',
        language_threat: 'УГРОЗА ЯЗЫКАМ ',
        language_threat_text: 'Демографическая проблема имеет серьезные последствия для культур и языков коренных меньшинств. В России за последние 100 лет исчезли 15 языков малочисленных народов, 10 из которых - за последние 35 лет. В настоящее время около 10% из полутора сотен языков народов России находятся на грани исчезновения, а более 60% приближаются к этой опасной черте. Эта проблема распространена не только в России, но и по всему миру. Преподавание языков коренных меньшинств в школах также является сложной задачей, особенно из-за урбанизации и доминирующей роли русского языка. Разговаривать на своем языке - важная часть идентичности народа, поэтому вымирание языков влечет за собой потерю культурных ценностей.',
        principle_free: 'ПРИНЦИП СВОБОДНОГО,',
        preliminary_and_conscious: 'ПРЕДВАРИТЕЛЬНОГО И ОСОЗНАНОГО',
        agreement: 'СОГЛАСИЯ (СПОС)',
        important_step: 'Важным шагом на пути к соблюдению прав коренных народов стал принцип свободного, предварительного согласия (СПОС).  Он был принят в рамках Декларации Объединенных Наций о правах коренных народов в 2007 году.',
        fpic_suppose: 'Принцип СПОС предполагает, что организация или компания должна получить согласие коренного населения перед началом проекта на их территории без административного или политического давления. Жители должны быть информированы о возможных последствиях, а процедура согласования должна соответствовать нормам решений коренного народа.',
        un_summary: 'В докладе ООН отмечается, что одной из первых российских компаний, сотрудничавших с коренным населением при реализации проекта "Сахалин-2" на севере Сахалина, стала ООО "Сахалинская Энергия". Был разработан План содействия по развитию коренных малочисленных народов севера Сахалина.',
        fpic_section_2: 'Практика принципов СПОС в России остается нерегулярной. Оптимистичный сценарий сахалинского плана можно скорее считать исключением, подтверждающим общее правило: даже сейчас, в 21 веке, после многочисленных докладов и конференций ООН, права коренных народов России нарушаются.',
        fpic_cases: 'Вот лишь несколько кейсов, когда принципы СПОС не были соблюдены:',
        damn_gold: 'Проклятое золото Шорцев.',
        damn_gold_section_1: 'Шорцы, коренной народ Южной Сибири, проживают в Республике Хакасия и Кемеровской области; их численность составляет около 14 тысяч человек, но с середины 20 века их численность сократилась на 14% из-за разрушения экосистемы и золотодобычи. На территории семи регионов России было выявлено 279 лицензионных участков по добыче золота,  представляющих потенциальную угрозу окружающей среде и человеку.',
        damn_gold_section_2: 'Промышленное освоение исконных территорий шорцев, включая добычу золота и угля, угрожает существованию этого народа, приводя к исчезновению их культуры и языка, вынуждая их покидать свои земли и повреждая уникальное биоразнообразие региона, при этом принципы свободного, предварительного и осознанного согласия не соблюдаются из-за неофициальности многих мест разработки и отсутствия компаний, готовых нести ответственность за нарушения прав шорцев и загрязнение окружающей среды.',
        damn_gold_section_3: 'Таким образом, соблюдение принципа СПОС - неотъемлемая часть прав коренного населения по всему миру. СПОС не только необходимо для сохранения уникальных культур, языков и методов природопользования коренных народов, но и практический шаг в налаживании отношений с теми группами,  которые дискриминировались веками.',
        dead_rivers: 'Мертвые реки надода Манси.',
        dead_rivers_text: 'Мертвые реки такие как (Тальтия, Ивделя, Шегультан и Ольховка) народа манси в Ханты-Мансийском автономном округе и соседних регионах стали непригодны для природопользования из-за загрязнения промышленными выбросами, что препятствует традиционным видам занятий манси, таким как рыболовство, охота и оленеводство.',
        summary: 'Вывод',
        summary_text: 'Несмотря на то, что некоторые компании в России соблюдают требования СПОС, решение о выполнении или невыполнении этого принципа в большинстве случаев остается за самими организациями. При этом, учитывая все временные и денежные затраты, а также право коренных жителей отказаться от проектов на своей земле, частные компании редко находят достаточные основания для ведения переговоров с коренными народами. В результате этого происходит произвол на исторических территориях коренного населения, эксплуатация ресурсов, разрушение уникальных экологических ландшафтов и нарушение прав коренных народов на самоопределение.',

        //help
        title_help_page: 'помощь коренным народам',
        link_len_obl: 'Центр коренных народов Ленинградской области',
        len_obl: ' культурно-просветительский центр, созданный с целью сохранения и развития культуры коренных народов Ленинградской области (ижоры, води, ингерманландских финнов, вепсов и тихвинских карел).',
        link_peoples_center_pribaikal: 'Центр культуры коренных народов Прибайкалья',
        peoples_center_pribaikal: ' центр, созданный с целью возрождения, сохранения и развития традиционной культуры коренных народов Прибайкалья, приобщение к ней жителей, туристов и гостей Иркутской области.',
        link_peoples_severa: 'Коренные малочисленные народы Севера',
        peoples_severa: ' группа посвящена культурным мероприятиям и событиям народов Севера.',
        forum_title: 'Форум молодежи коренных малочисленных народов Севера, Сибири и Дальнего Востока «Российский Север»',
        forum_info: 'Форум проводится с целью создания межнациональной коммуникационной площадки для взаимодействия молодежи и вовлечения активных молодых людей в решение задач, отвечающих современным запросам государства и общества.',
        link_history_peoples_dv: 'История коренных народов Дальнего Востока',
        history_peoples_dv: 'Группа посвящена истории, религия, быту, культуре коренных народов Дальнего Востока.',
        link_mammoth_effect: 'Фонд сохранения и поддержки природного и культурного наследия «Эффект Мамонта»',
        mammoth_effect: 'Фонд объединяет ученых, исследователей, путешественников и представителей творческой сферы для того, чтобы трудиться над сохранением уникального наследия нашей планеты.',
        link_arctic_volunteers: 'Волонтерский проект "Добровольцы Арктики"',
        arctic_volunteers: 'Проект направлен на оказание помощи в документальном сопровождения жителей ЯНАО из числа КМНС (коренных малочисленных народов севера) в рамках социальных программ предусмотренных Законодательством ЯНАО для данной категории граждан.'
    }
  }
};

const currentLanguage = localStorage.getItem('language') || 'ru'; // язык по умолчанию, если в localStorage нет сохраненного значения

i18n
  .use(initReactI18next) // пропускает i18n вниз до react-i18next
  .init({
    resources,
    lng: currentLanguage, // Установка языка на основе сохраненного значения или использование 'ru' по умолчанию
    keySeparator: false, // мы не используем или не нуждаемся в ключах в форме messages.welcome
    interpolation: {
      escapeValue: false // react уже защищает от инъекций
    }
  });

export default i18n;
