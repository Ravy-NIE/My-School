// ==========================================
// វិទ្យាល័យ ឧដុង្គ - OUDONG HIGH SCHOOL DATA STORE
// ==========================================
// រាល់ទិន្នន័យទាំងអស់ត្រូវបានរៀបចំជា Array/Object 
// ងាយស្រួលក្នុងការបន្ថែមរូបភាពថ្មីៗចូលក្នុង Folder assets/images/ និងភ្ជាប់ទិន្នន័យដោយមិនបាច់ប្តូរ Code HTML

const SCHOOL_DATA = {
    // ព័ត៌មានទូទៅរបស់សាលា
    info: {
        nameKh: "វិទ្យាល័យ ឧដុង្គ",
        nameEn: "Oudong High School",
        slogan: "ចំណេះដឹង សីលធម៌ គុណធម៌ និង បំណិនជីវិត",
        established: "1978",
        province: "ខេត្តកំពង់ស្ពឺ (តំបន់ប្រវត្តិសាស្ត្រឧដុង្គ)",
        address: "ផ្លូវជាតិលេខ ៥, ក្រុងឧដុង្គម៉ែជ័យ, ខេត្តកំពង់ស្ពឺ",
        phone: "+855 (0) 12 345 678 / +855 (0) 97 888 999",
        email: "info@oudonghighschool.edu.kh",
        facebook: "fb.com/OudongHighSchoolOfficial",
        telegram: "t.me/OudongHighSchool",
        stats: {
            students: "2,450+",
            teachers: "115",
            classrooms: "48",
            passRate: "89.5%"
        }
    },

    // 1. រចនាសម្ព័ន្ធបុគ្គលិកសាលា (School Staff & Org Chart)
    staff: [
        {
            id: 1,
            name: "លោក ឡៃ គួង",
            position: "នាយកវិទ្យាល័យ",
            category: "management",
            roleLevel: "principal",
            subject: "management",
            degree: "បរិញ្ញាបត្រជាន់ខ្ពស់ គ្រប់គ្រងអប់រំ (M.Ed)",
            experience: "២២ ឆ្នាំ ក្នុងវិស័យអប់រំ",
            image: "assets/images/staff/Mr Lay Koung.jpg",
            phone: "012 345 678",
            email: "principal@oudonghighschool.edu.kh",
            bio: "ដឹកនាំ និងអភិវឌ្ឍន៍វិទ្យាល័យឧដុង្គ ឲ្យក្លាយជាសាលារៀនគំរូផ្នែកបច្ចេកវិទ្យា និងគុណភាពអប់រំនៅកម្ពុជា។"
        },
        {
            id: 2,
            name: "លោក ទត សំណាង",
            position: "នាយករង ទទួលបន្ទុកសិក្សាធិការ",
            category: "management",
            roleLevel: "vice_principal",
            subject: "khmer",
            degree: "បរិញ្ញាបត្រ អក្សរសាស្ត្រខ្មែរ",
            experience: "១២ ឆ្នាំ",
            image: "assets/images/staff/Mr Tort Somnang.jpg",
            phone: "012 987 654",
            email: "vice.academic@oudonghighschool.edu.kh",
            bio: "គ្រប់គ្រងកាលវិភាគសិក្សា ការប្រឡង និងពង្រឹងគុណភាពការបង្រៀនរបស់លោកគ្រូអ្នកគ្រូ។"
        },
        {
            id: 3,
            name: "លោក សុន ពិសិដ្ឋ",
            position: "នាយករង ទទួលបន្ទុកកិច្ចការសិស្ស និងរដ្ឋបាល",
            category: "management",
            roleLevel: "vice_principal",
            subject: "សេដ្ឋកិច្ច",
            degree: "បរិញ្ញាបត្រ សេដ្ឋកិច្ច",
            experience: "១៥ ឆ្នាំ",
            image: "assets/images/staff/Mr Son Piseth.jpg",
            phone: "016 555 444",
            email: "vice.admin@oudonghighschool.edu.kh",
            bio: "គ្រប់គ្រងវិន័យសិស្ស បរិស្ថានសាលា និងហេដ្ឋារចនាសម្ព័ន្ធបច្ចេកវិទ្យាព័ត៌មាន។"
        },
        {
            id: 4,
            name: "លោក ទូច ណារ័ត្ន",
            position: "បណ្ណារក្ស",
            category: "other",
            roleLevel: "librarian",
            subject: "បណ្ណារក្ស",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្រ្តកុំព្យូទ័រ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/Toch Naroth.jpg",
            phone: "097 111 222",
            email: "socheat.kim@oudonghighschool.edu.kh",
            bio: "គ្រប់គ្រងបណ្ណាល័យ និងបង្រៀនសិស្សអំពីបច្ចេកវិទ្យាព័ត៌មាន។"
        },
        {
            id: 5,
            name: "លោកស្រី ហេង ស្រីណែត",
            position: "ប្រធានក្រុមបច្ចេកទេស គណិតវិទ្យា",
            category: "stem",
            roleLevel: "head_teacher",
            subject: "math",
            degree: "បរិញ្ញាបត្រ គណិតវិទ្យា",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "088 333 444",
            email: "sreynet.heng@oudonghighschool.edu.kh",
            bio: "បង្រៀនសិស្សពូកែគណិតវិទ្យា និងរៀបចំយុទ្ធសាស្ត្រប្រឡងបាក់ឌុប។"
        },
        {
            id: 6,
            name: "លោក ឆាយ សុវណ្ណ",
            position: "គ្រូបង្រៀន គីមីវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "chemistry",
            degree: "បរិញ្ញាបត្រ គីមីវិទ្យា",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "092 444 555",
            email: "sovann.chhay@oudonghighschool.edu.kh",
            bio: "ជំនាញខាងការពិសោធន៍គីមីវិទ្យា និងការណែនាំសិស្សក្នុងបន្ទប់ពិសោធន៍។"
        },
        {
            id: 7,
            name: "លោកស្រី កែវ សុភា",
            position: "គ្រូបង្រៀន ជីវវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "biology",
            degree: "បរិញ្ញាបត្រ ជីវវិទ្យា",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "017 888 777",
            email: "sophea.keo@oudonghighschool.edu.kh",
            bio: "បង្រៀនជីវវិទ្យាកម្រិតវិទ្យាល័យ និងការស្រាវជ្រាវបរិស្ថានធម្មជាតិ។"
        },
        {
            id: 8,
            name: "លោក ប៊ុន ថន",
            position: "ប្រធានក្រុមបច្ចេកទេស វិទ្យាសាស្ត្រសង្គម (ប្រវត្តិវិទ្យា)",
            category: "social",
            roleLevel: "head_teacher",
            subject: "history",
            degree: "បរិញ្ញាបត្រ ប្រវត្តិវិទ្យា",
            experience: "១៤ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "010 777 888",
            email: "bunthorn@oudonghighschool.edu.kh",
            bio: "អប់រំសិស្សអំពីប្រវត្តិសាស្ត្រជាតិ វប្បធម៌ខ្មែរ និងតំបន់ប្រវត្តិសាស្ត្រឧដុង្គ។"
        },
        {
            id: 9,
            name: "លោកស្រី លី ដានី",
            position: "គ្រូបង្រៀន ភាសាអង់គ្លេស",
            category: "social",
            roleLevel: "teacher",
            subject: "english",
            degree: "បរិញ្ញាបត្រ អក្សរសាស្ត្រអង់គ្លេស",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "015 333 222",
            email: "dany.ly@oudonghighschool.edu.kh",
            bio: "រៀបចំកម្មវិធីសន្ទនាភាសាអង់គ្លេស និងការប្រឡងអាហារូបករណ៍បរទេស។"
        },
        {
            id: 10,
            name: "លោក អ៊ុំ វណ្ណៈ",
            position: "គ្រូបង្រៀន ភូមិវិទ្យា",
            category: "social",
            roleLevel: "teacher",
            subject: "geography",
            degree: "បរិញ្ញាបត្រ ភូមិវិទ្យា",
            experience: "១១ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "089 666 555",
            email: "vannak.oum@oudonghighschool.edu.kh",
            bio: "បង្រៀនភូមិវិទ្យា និងការប្រើប្រាស់ប្រព័ន្ធព័ត៌មានភូមិសាស្ត្រ (GIS)។"
        },
        {
            id: 11,
            name: "លោកស្រី គង់ សុភា",
            position: "ប្រធានបណ្ណាល័យ និងបច្ចេកវិទ្យា",
            category: "admin",
            roleLevel: "staff",
            subject: "ict",
            degree: "បរិញ្ញាបត្រ ព័ត៌មានវិទ្យា",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 222 333",
            email: "sophea.library@oudonghighschool.edu.kh",
            bio: "គ្រប់គ្រងបណ្ណាល័យឌីជីថល e-Library និងសម្របសម្រួលសម្ភារៈសិក្សា។"
        }
    ],

    // 2. ព័ត៌មាន និងសកម្មភាពសាលា (News & Activities)
    activities: [
        {
            id: 101,
            title: "ពិព័រណ៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា STEM ឆ្នាំ២០២៦",
            category: "stem",
            date: "២៨ កក្កដា ២០២៦",
            author: "គណៈកម្មការ STEM",
            image: "assets/images/activities/stem_fair.png",
            summary: "សិស្សានុសិស្សវិទ្យាល័យឧដុង្គបានបង្កើតគម្រោងរ៉ូបូត និងឧបករណ៍ស្វ័យប្រវត្តិកម្មឆ្លាតវៃចំនួន ២៥ គម្រោង...",
            content: "នៅក្នុងពិព័រណ៍ STEM ឆ្នាំ២០២៦ នេះ សិស្សានុសិស្សថ្នាក់ទី១០ ដល់ទី១២ បានបង្ហាញស្នាដៃប្រឌិតបង្កើតថ្មីជាច្រើន ដូចជា ប្រព័ន្ធស្រោចស្រពដំណាំស្វ័យប្រវត្តិដោយ solar cell, រ៉ូបូតសម្អាតថ្នាក់រៀន និងប្រព័ន្ធប្រកាសអាសន្នគ្រោះធម្មជាតិ។ គណៈកម្មការបានវាយតម្លៃខ្ពស់ចំពោះគំនិតច្នៃប្រឌិតរបស់សិស្ស។",
            views: 540,
            featured: true
        },
        {
            id: 102,
            title: "ការប្រកួតកីឡាបាល់ទះ និងបាល់ទាត់មិត្តភាពពានរង្វាន់ឧដុង្គ",
            category: "sports",
            date: "២២ កក្កដា ២០២៦",
            author: "គ្រូអប់រំកាយ",
            image: "assets/images/activities/sports_day.png",
            summary: "ការប្រកួតកីឡាប្រចាំឆ្នាំដើម្បីលើកកម្ពស់សុខភាព មិត្តភាព និងភាពសាមគ្គីរវាងសិស្សគ្រប់កម្រិតថ្នាក់...",
            content: "ព្រឹត្តិការណ៍កីឡាសាលាឆ្នាំនេះទទួលបានការចូលរួមពីក្រុមកីឡាករសិស្សចំនួន ១៦ ក្រុម។ ក្រៅពីការប្រកួតបាល់ទះ និងបាល់ទាត់ ក៏មានការប្រកួតរត់ប្រណាំង និងល្បែងប្រជាប្រិយខ្មែរផងដែរ។ គោលបំណងគឺដើម្បីឲ្យសិស្សមានសុខភាពល្អ បញ្ជៀសផុតពីគ្រឿងញៀន និងស្មារតីក្រុម។",
            views: 420,
            featured: true
        },
        {
            id: 103,
            title: "យុទ្ធនាការដាំដើមឈើ និងលើកកម្ពស់បរិស្ថានបៃតងសាលារៀន",
            category: "community",
            date: "១៥ កក្កដា ២០២៦",
            author: "យុវជនកាកបាទក្រហមសាលា",
            image: "assets/images/activities/stem_fair.png",
            summary: "លោកគ្រូ អ្នកគ្រូ និងសិស្សានុសិស្សបានរួមគ្នាដាំដើមឈើហូបផ្លែ និងដើមឈើស្រមោលចំនួន ៣០០ ដើម...",
            content: "ដើម្បីចូលរួមចំណែកការពារបរិស្ថាន និងបង្កើតបរិយាកាសសិក្សាស្រស់បំព្រង ក្លឹបបរិស្ថានសាលាបានរៀបចំសកម្មភាពដាំដើមឈើជុំវិញបរិវេណសាលា និងដាំផ្កាលម្អមុខអាគារសិក្សា។ សកម្មភាពនេះបណ្តុះស្មារតីស្រឡាញ់ធម្មជាតិដល់យុវជន។",
            views: 380,
            featured: false
        },
        {
            id: 104,
            title: "វគ្គបំប៉នពិសេសរៀបចំខ្លួនប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)",
            category: "exam",
            date: "០៥ កក្កដា ២០២៦",
            author: "គណៈនាយកសាលា",
            image: "assets/images/knowledge/digital_learning.png",
            summary: "ការបើកថ្នាក់បំប៉នដោយឥតគិតថ្លៃលើមុខវិជ្ជាគន្លឹះចំនួន ៧ សម្រាប់សិស្សថ្នាក់ទី១២ ទាំងអស់...",
            content: "វិទ្យាល័យឧដុង្គបានរៀបចំថ្នាក់រៀនបន្ថែមម៉ោងដោយមានការស្ម័គ្រចិត្តពីលោកគ្រូអ្នកគ្រូបទពិសោធន៍ខ្ពស់ ដើម្បីរំលឹកមេរៀន ធ្វើលំហាត់គំរូ និងដោះស្រាយវិញ្ញាសាប្រឡងឆ្នាំចាស់ៗ ជូនសិស្សថ្នាក់ទី១២ ត្រៀមប្រឡងបាក់ឌុបខាងមុខ។",
            views: 890,
            featured: true
        }
    ],

    // 3. ចំណេះដឹងថ្មីៗ (Educational Articles & Knowledge)
    knowledge: [
        {
            id: 201,
            title: "វិធីសាស្ត្ររៀបចំកាលវិភាគស្វ័យសិក្សាឲ្យមានប្រសិទ្ធភាពខ្ពស់",
            category: "exam_tips",
            date: "២៥ កក្កដា ២០២៦",
            author: "លោកស្រី ចាន់ ធារី",
            image: "assets/images/knowledge/digital_learning.png",
            readTime: "៥ នាទី",
            summary: "គន្លឹះសំខាន់ៗទាំង ៥ យ៉ាងក្នុងការបែងចែកពេលវេលាសិក្សា និងការប្រើប្រាស់បច្ចេកទេស Pomodoro Technique...",
            content: "ការសិក្សាទទួលបានផលល្អ មិនមែនទាមទារការទន្ទិញមេរៀនច្រើនម៉ោងជាប់គ្នានោះទេ ប៉ុន្តែគឺផ្អែកលើការផ្តោតអារម្មណ៍ និងការសម្រាកត្រូវតាមពេលវេលា។ ក្នុងអត្ថបទនេះ យើងបង្ហាញពីវិធីបែងចែកមុខវិជ្ជាលំបាក និងងាយស្រួល ព្រមទាំងការកត់ត្រា Note រៀបរយ។",
            downloadFile: "assets/docs/study_planner_template.pdf"
        },
        {
            id: 202,
            title: "ការប្រើប្រាស់ AI និងបច្ចេកវិទ្យាឌីជីថលក្នុងការស្រាវជ្រាវមេរៀន",
            category: "digital",
            date: "១៨ កក្កដា ២០២៦",
            author: "លោក សុខ វិសាល",
            image: "assets/images/knowledge/digital_learning.png",
            readTime: "៧ នាទី",
            summary: "របៀបប្រើប្រាស់ប្រភពព័ត៌មានជឿជាក់លើអ៊ីនធឺណិត និងបណ្ណាល័យឌីជីថលសម្រាប់សិស្សវិទ្យាល័យ...",
            content: "បច្ចេកវិទ្យាឌីជីថល និងឧបករណ៍ AI អាចជាជំនួយការដ៏ល្អក្នុងការរៀនសូត្រ ប្រសិនបើប្រើប្រាស់ត្រូវទិសដៅ។ សិស្សអាចស្វែងរកមេរៀន វីដេអូពន្យល់ពិសោធន៍ និងបណ្ណាល័យអេឡិចត្រូនិចដោយសុវត្ថិភាព។",
            downloadFile: "assets/docs/digital_learning_guide.pdf"
        },
        {
            id: 203,
            title: "រូបមន្ត និងគន្លឹះដោះស្រាយលំហាត់រូបវិទ្យា និងគណិតវិទ្យាថ្នាក់ទី១២",
            category: "stem",
            date: "១០ កក្កដា ២០២៦",
            author: "លោក គឹម សុជាតិ",
            image: "assets/images/activities/stem_fair.png",
            readTime: "១០ នាទី",
            summary: "សង្ខេបសន្លឹកកិច្ចការរូបមន្តសំខាន់ៗ និងវិធីសាស្ត្រគណនាលឿន និងត្រឹមត្រូវ...",
            content: "ចងក្រងរូបមន្តសំខាន់ៗលើមុខវិជ្ជារូបវិទ្យា និងគណិតវិទ្យា សម្រាប់សិស្សស្វ័យសិក្សា និងដោះស្រាយលំហាត់គំរូ step-by-step។",
            downloadFile: "assets/docs/formulas_grade12.pdf"
        }
    ],

    // 4. ស្តង់ដាសំខាន់ៗ និងបទបញ្ជាសាលា (School Standards & Rules)
    standards: [
        {
            id: "STD-01",
            title: "ស្តង់ដាសាលារៀនគំរូ (Model School Standard)",
            category: "standard",
            icon: "fa-award",
            description: "អនុវត្តតាមស្តង់ដាសាលារៀនគំរូរបស់ក្រសួងអប់រំ យុវជន និងកីឡា លើ ៥ វិស័យធំៗ៖ ការរៀននិងបង្រៀន, បរិស្ថាន, គ្រប់គ្រង, សហគមន៍ និងសុខភាពសិក្សា។",
            highlights: [
                "ការគ្រប់គ្រងរដ្ឋបាលតាមប្រព័ន្ធឌីជីថល",
                "គុណភាពការបង្រៀនផ្តោតលើសិស្សជាមជ្ឈមណ្ឌល",
                "បរិស្ថានបៃតង ស្អាត និងសុវត្ថិភាព",
                "កិច្ចសហការជិតស្និទ្ធជាមួយមាតាបិតាសិស្ស"
            ],
            file: "assets/docs/model_school_standard.pdf"
        },
        {
            id: "STD-02",
            title: "បទបញ្ជាផ្ទៃក្នុងសិស្ស (Internal School Rules)",
            category: "rules",
            icon: "fa-gavel",
            description: "សិស្សានុសិស្សទាំងអស់ត្រូវគោរពបទបញ្ជាផ្ទៃក្នុង ដើម្បីរក្សាវិន័យ សីលធម៌ និងកិត្តិយសរបស់សាលារៀន។",
            highlights: [
                "វត្តមាន និងការស្លៀកពាក់ឯកសណ្ឋានត្រឹមត្រូវ",
                "ការគោរពទង់ជាតិ លោកគ្រូអ្នកគ្រូ និងមិត្តភក្តិ",
                "ហាមឃាត់ដាច់ខាតនូវគ្រឿងញៀន និងអំពើហិង្សា",
                "ថែរក្សាសម្ភារៈសាធារណៈ និងអនាម័យថ្នាក់រៀន"
            ],
            file: "assets/docs/school_rules.pdf"
        },
        {
            id: "STD-03",
            title: "ស្តង់ដាគុណភាពអប់រំ STEM & Digital",
            category: "curriculum",
            icon: "fa-microchip",
            description: "ការបញ្ចូលកម្មវិធីសិក្សា STEM បច្ចេកវិទ្យាព័ត៌មាន និងភាសាបរទេស ឆ្លើយតបទៅនឹងបដិវត្តន៍ឧស្សាហកម្ម ៤.០។",
            highlights: [
                "បន្ទប់ពិសោធន៍វិទ្យាសាស្ត្រទំនើប",
                "បន្ទប់កុំព្យូទ័រ និងអ៊ីនធឺណិតល្បឿនលឿន",
                "ក្លឹបប្រកួតប្រជែងស្នាដៃបច្ចេកវិទ្យា",
                "ការរៀនតាមប្រព័ន្ធ e-Learning"
            ],
            file: "assets/docs/stem_standards.pdf"
        }
    ]
};
