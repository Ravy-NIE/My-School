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
            teachers: "64",
            classrooms: "10",
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
            subject: "economics",
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
            category: "admin",
            roleLevel: "librarian",
            subject: "librarian",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្រ្តកុំព្យូទ័រ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/Toch Naroth.jpg",
            phone: "097 111 222",
            email: "socheat.kim@oudonghighschool.edu.kh",
            bio: "គ្រប់គ្រងបណ្ណាល័យ និងបង្រៀនសិស្សអំពីបច្ចេកវិទ្យាព័ត៌មាន។"
        },
        {
            id: 5,
            name: "លោក ឃុយ រាត្រី",
            position: "គ្រូបង្រៀន គណិតវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "math",
            degree: "បរិញ្ញាបត្រ គណិតវិទ្យា",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 001",
            email: "khuy.reatrey@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀនមុខវិជ្ជាគណិតវិទ្យា ណែនាំ និងពង្រឹងសមត្ថភាពដោះស្រាយលំហាត់ដល់សិស្សានុសិស្ស។"
        },
        {
            id: 6,
            name: "លោក ប្រាក់ ចន្ធី",
            position: "គ្រូបង្រៀន គណិតវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "math",
            degree: "បរិញ្ញាបត្រ គណិតវិទ្យា",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 002",
            email: "prak.chanthy@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀនមុខវិជ្ជាគណិតវិទ្យា និងជួយសម្របសម្រួលការរៀនសូត្ររបស់សិស្ស។"
        },
        {
            id: 7,
            name: "លោក លឹម សំណាង",
            position: "គ្រូបង្រៀន គណិតវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "math",
            degree: "បរិញ្ញាបត្រ គណិតវិទ្យា",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 003",
            email: "lim.somnang@oudonghighschool.edu.kh",
            bio: "បង្រៀនគណិតវិទ្យា និងរៀបចំកិច្ចការស្រាវជ្រាវលំហាត់គំរូសម្រាប់សិស្សថ្នាក់ទី១២។"
        },
        {
            id: 8,
            name: "លោក ហៀន ភាស់",
            position: "គ្រូបង្រៀន ព័ត៌មានវិទ្យា (ICT)",
            category: "stem",
            roleLevel: "teacher",
            subject: "ict",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រកុំព្យូទ័រ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/Mr Hien Pheas.jpg",
            phone: "012 111 004",
            email: "hien.pheas@oudonghighschool.edu.kh",
            bio: "បង្រៀនជំនាញព័ត៌មានវិទ្យា កូដ និងការប្រើប្រាស់កុំព្យូទ័រក្នុងជីវភាពរស់នៅ។"
        },
        {
            id: 9,
            name: "លោក គង់ ទិត្យដារ៉ាវី",
            position: "គ្រូបង្រៀន ព័ត៌មានវិទ្យា (ICT)",
            category: "stem",
            roleLevel: "teacher",
            subject: "ict",
            degree: "បរិញ្ញាបត្រ ព័ត៌មានវិទ្យា",
            experience: "៥ ឆ្នាំ",
            image: "assets/images/staff/Mr Kong Tetdaravy.jpg",
            phone: "012 111 005",
            email: "kong.titydaravy@oudonghighschool.edu.kh",
            bio: "បង្រៀនកម្មវិធីសិក្សាឌីជីថល ICT និងការបង្កើតគេហទំព័រដល់សិស្សានុសិស្ស។"
        },
        {
            id: 10,
            name: "លោក ចន សុខដា",
            position: "គ្រូបង្រៀន ភូមិវិទ្យា",
            category: "social",
            roleLevel: "teacher",
            subject: "geography",
            degree: "បរិញ្ញាបត្រ ភូមិវិទ្យា",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 006",
            email: "choron.sokhda@oudonghighschool.edu.kh",
            bio: "បង្រៀនមុខវិជ្ជាភូមិវិទ្យា ភូមិសាស្ត្រកម្ពុជា និងការប្រែប្រួលអាកាសធាតុ។"
        },
        {
            id: 11,
            name: "លោក មឿន រិទ្ធី",
            position: "គ្រូបង្រៀន ផែនដី និង បរិស្ថានវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "earth_science",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្របរិស្ថាន",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 007",
            email: "moeun.rithy@oudonghighschool.edu.kh",
            bio: "បង្រៀនវិទ្យាសាស្ត្រផែនដី និងបរិស្ថានវិទ្យា ជំរុញការស្រឡាញ់ធម្មជាតិដល់យុវជន។"
        },
        {
            id: 12,
            name: "លោក ឃូ គៀហេង",
            position: "មន្ត្រីរដ្ឋបាល",
            category: "admin",
            roleLevel: "staff",
            subject: "admin",
            degree: "បរិញ្ញាបត្រ រដ្ឋបាលសាធារណៈ",
            experience: "១១ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 008",
            email: "khou.kiheng@oudonghighschool.edu.kh",
            bio: "សម្របសម្រួលការងាររដ្ឋបាល សិស្សានុសិស្ស និងឯកសារផ្លូវការរបស់សាលា។"
        },
        {
            id: 13,
            name: "លោក ជ័យ លីដា",
            position: "ជំនួយការនាយក",
            category: "management",
            roleLevel: "assistant",
            subject: "management",
            degree: "បរិញ្ញាបត្រ គ្រប់គ្រងអប់រំ",
            experience: "១២ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 009",
            email: "chey.lyda@oudonghighschool.edu.kh",
            bio: "ជួយការងារនាយកក្នុងការរៀបចំផែនការ និងគ្រប់គ្រងសកម្មភាពសាលារៀន។"
        },
        {
            id: 14,
            name: "លោកស្រី ជួន ចាន់ធី",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 010",
            email: "chuon.chanthy@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលសកម្មភាពសិក្សារបស់សិស្សានុសិស្ស។"
        },
        {
            id: 15,
            name: "លោក ជែល ចន្ថា",
            position: "គ្រូបង្រៀន រូបវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "physics",
            degree: "បរិញ្ញាបត្រ រូបវិទ្យា",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 011",
            email: "chel.chantha@oudonghighschool.edu.kh",
            bio: "បង្រៀនរូបវិទ្យា និងការពិសោធន៍រូបវិទ្យាជាក់ស្តែងដល់សិស្ស។"
        },
        {
            id: 16,
            name: "លោក ហ៊ុយ ហួ",
            position: "គ្រូបង្រៀន រូបវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "physics",
            degree: "បរិញ្ញាបត្រ រូបវិទ្យា",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 012",
            email: "huy.houa@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀនរូបវិទ្យា ណែនាំរូបមន្ត និងវិធីសាស្ត្រដោះស្រាយលំហាត់ប្រឡង។"
        },
        {
            id: 17,
            name: "លោកស្រី ជ័យ សុខលី",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 013",
            email: "chey.sokhly@oudonghighschool.edu.kh",
            bio: "បង្រៀន និងអភិវឌ្ឍសមត្ថភាពសិក្សារបស់សិស្សានុសិស្ស។"
        },
        {
            id: 18,
            name: "អ្នកគ្រូ ណង សុខខឿន",
            position: "គ្រូបង្រៀន គីមីវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "chemistry",
            degree: "បរិញ្ញាបត្រ គីមីវិទ្យា",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 014",
            email: "nong.sokkhoeun@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀនគីមីវិទ្យា និងដឹកនាំការពិសោធន៍គីមីក្នុងបន្ទប់ពិសោធន៍។"
        },
        {
            id: 19,
            name: "លោក ប៉ុល មករា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 015",
            email: "pol.makara@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយគាំទ្រការរៀនសូត្ររបស់សិស្សានុសិស្ស។"
        },
        {
            id: 20,
            name: "លោក ប៉ែន សុវណ្ណថា",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 016",
            email: "pen.sovantha@oudonghighschool.edu.kh",
            bio: "បង្រៀន និងសម្របសម្រួលការសិក្សាមុខវិជ្ជាវិទ្យាសាស្ត្រ។"
        },
        {
            id: 21,
            name: "លោកស្រី ផាន់ ស្រីពេជ្រ",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អក្សរសាស្ត្រ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 017",
            email: "phan.sreypech@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយលើកកម្ពស់ការអាន និងសំណេររបស់សិស្ស។"
        },
        {
            id: 22,
            name: "លោក ពា វ៉ូរ",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 018",
            email: "pea.vour@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលវិន័យការសិក្សារបស់សិស្ស។"
        },
        {
            id: 23,
            name: "លោក ព្រុយ ចាន់ដេត",
            position: "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
            category: "social",
            roleLevel: "teacher",
            subject: "khmer",
            degree: "បរិញ្ញាបត្រ អក្សរសាស្ត្រខ្មែរ",
            experience: "១១ ឆ្នាំ",
            image: "assets/images/staff/Mr Pruy Chandeth.jpg",
            phone: "012 111 019",
            email: "pruy.chandeth@oudonghighschool.edu.kh",
            bio: "បង្រៀនអក្សរសាស្ត្រខ្មែរ វប្បធម៌ និងអក្សរសិល្ប៍ខ្មែរដល់សិស្សានុសិស្ស។"
        },
        {
            id: 24,
            name: "លោក យន់ ទី",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៥ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 020",
            email: "youn.ty@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលសកម្មភាពរៀនសូត្រក្នុងថ្នាក់។"
        },
        {
            id: 25,
            name: "លោកស្រី យិន សុផល",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 021",
            email: "yin.sophal@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងអភិវឌ្ឍសមត្ថភាពចំណេះដឹងសិស្សានុសិស្ស។"
        },
        {
            id: 26,
            name: "លោក យឿន សុវណ្ណារ៉ា",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 022",
            email: "yeuen.sovannara@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយពង្រឹងចំណេះដឹងផ្នែកវិទ្យាសាស្ត្រដល់សិស្ស។"
        },
        {
            id: 27,
            name: "លោក រ៉ឹង ប៊ុន ពិសិដ្ឋ",
            position: "គ្រូបង្រៀន ភាសាបរទេស",
            category: "social",
            roleLevel: "teacher",
            subject: "foreign_lang",
            degree: "បរិញ្ញាបត្រ ភាសាបរទេស",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 023",
            email: "roeng.bunpiseth@oudonghighschool.edu.kh",
            bio: "បង្រៀនភាសាបរទេស ការប្រាសទាក់ទង និងជំនាញសន្ទនា។"
        },
        {
            id: 28,
            name: "លោក វី វឌ្ឍនា",
            position: "គ្រូបង្រៀន គីមីវិទ្យា",
            category: "stem",
            roleLevel: "teacher",
            subject: "chemistry",
            degree: "បរិញ្ញាបត្រ គីមីវិទ្យា",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 024",
            email: "vy.vatthana@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀនគីមីវិទ្យា និងជួយណែនាំលំហាត់គីមីកម្រិតវិទ្យាល័យ។"
        },
        {
            id: 29,
            name: "លោក សយ សុខណេត",
            position: "គ្រូបង្រៀន សីលធម៌-ពលរដ្ឋវិទ្យា",
            category: "social",
            roleLevel: "teacher",
            subject: "civics",
            degree: "បរិញ្ញាបត្រ សីលធម៌-ពលរដ្ឋវិទ្យា",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 025",
            email: "soy.sokhnet@oudonghighschool.edu.kh",
            bio: "បង្រៀនសីលធម៌-ពលរដ្ឋវិទ្យា និងអប់រំចរិយាធម៌ដល់យុវជន។"
        },
        {
            id: 30,
            name: "លោកស្រី សោម ចន្ទ្រា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 026",
            email: "som.chantrea@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលការសិក្សាក្នុងថ្នាក់រៀន។"
        },
        {
            id: 31,
            name: "លោក ហែម សាវិន",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 027",
            email: "hem.savin@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងណែនាំការរៀនសូត្រដល់សិស្សានុសិស្ស។"
        },
        {
            id: 32,
            name: "លោកស្រី កង ចាន់ឡាង",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៥ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 028",
            email: "kong.chanlang@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងអភិវឌ្ឍសមត្ថភាពសិស្សានុសិស្ស។"
        },
        {
            id: 33,
            name: "លោកស្រី កែវ ស៊ីវត្ថា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 029",
            email: "keo.sivatha@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយសម្របសម្រួលសកម្មភាពថ្នាក់រៀន។"
        },
        {
            id: 34,
            name: "លោក ខេន សុខគា",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 030",
            email: "khen.sokkea@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយគាំទ្រការរៀនសូត្រផ្នែកវិទ្យាសាស្ត្រ។"
        },
        {
            id: 35,
            name: "លោក ងៀប គៀងហួរ",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 031",
            email: "ngieb.kienghour@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលការសិក្សារបស់សិស្ស។"
        },
        {
            id: 36,
            name: "លោក ចៅ សុផន",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 032",
            email: "chau.sophon@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជំរុញការរៀនសូត្រតាមបែបវិទ្យាសាស្ត្រ។"
        },
        {
            id: 37,
            name: "លោក ជា ថៃ",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 033",
            email: "chea.thai@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងណែនាំវិន័យចំណេះដឹងដល់សិស្ស។"
        },
        {
            id: 38,
            name: "លោកស្រី ជុំ កូលាប",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 034",
            email: "chum.kolab@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលសកម្មភាពរៀនសូត្រ។"
        },
        {
            id: 39,
            name: "លោក ជ័រ ដារិទ្ធ",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 035",
            email: "choa.darith@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងពង្រឹងចំណេះដឹងដល់សិស្សានុសិស្ស។"
        },
        {
            id: 40,
            name: "លោក ញឹម សម្បត្តិ",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 036",
            email: "nhim.sombath@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលការសិក្សាក្នុងថ្នាក់។"
        },
        {
            id: 41,
            name: "លោក តន់ វឌ្ឍនៈភាព",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៥ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 037",
            email: "ton.vattanaphap@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងអភិវឌ្ឍសមត្ថភាពសិក្សារបស់សិស្ស។"
        },
        {
            id: 42,
            name: "លោកស្រី ថាំង ចាន់ធីម",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 038",
            email: "thang.chanthim@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយគាំទ្រការរៀនសូត្ររបស់សិស្សានុសិស្ស។"
        },
        {
            id: 43,
            name: "លោក ថូ សុគន្ធ",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 039",
            email: "tho.sokunth@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយសម្របសម្រួលការសិក្សាផ្នែកវិទ្យាសាស្ត្រ។"
        },
        {
            id: 44,
            name: "លោកស្រី ថោ ចាន់រី",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 040",
            email: "thao.chanry@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងអភិវឌ្ឍសមត្ថភាពចំណេះដឹងសិស្ស។"
        },
        {
            id: 45,
            name: "លោក ទិត ធីរ៉ា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 041",
            email: "tit.thyra@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលការរៀនសូត្ររបស់សិស្ស។"
        },
        {
            id: 46,
            name: "លោក ទីវ ទ្រី",
            position: "មន្ត្រីគណនេយ្យ និង ហិរញ្ញវត្ថុ",
            category: "admin",
            roleLevel: "staff",
            subject: "finance",
            degree: "បរិញ្ញាបត្រ គណនេយ្យ និង ហិរញ្ញវត្ថុ",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 042",
            email: "tiv.try@oudonghighschool.edu.kh",
            bio: "គ្រប់គ្រង និងសម្របសម្រួលកិច្ចការគណនេយ្យ និងហិរញ្ញវត្ថុរបស់សាលា។"
        },
        {
            id: 47,
            name: "លោក ទុំ ថាវង្ស",
            position: "គ្រូបង្រៀន អប់រំកាយ និង កីឡា",
            category: "social",
            roleLevel: "teacher",
            subject: "pe",
            degree: "បរិញ្ញាបត្រ អប់រំកាយ និង កីឡា",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 043",
            email: "tum.thavongs@oudonghighschool.edu.kh",
            bio: "បង្រៀនអប់រំកាយ និងកីឡា លើកកម្ពស់សុខភាព និងស្មារតីកីឡារបស់សិស្ស។"
        },
        {
            id: 48,
            name: "លោក ផាន់ សម្ភ័ស",
            position: "គ្រូបង្រៀន អក្សរសាស្ត្រខ្មែរ",
            category: "social",
            roleLevel: "teacher",
            subject: "khmer",
            degree: "បរិញ្ញាបត្រ អក្សរសាស្ត្រខ្មែរ",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/Mr Phan Sophors.jpg",
            phone: "012 111 044",
            email: "phan.samphas@oudonghighschool.edu.kh",
            bio: "បង្រៀនអក្សរសាស្ត្រខ្មែរ និងអត្ថបទអក្សរសិល្ប៍ដល់សិស្សានុសិស្ស។"
        },
        {
            id: 49,
            name: "លោកស្រី ម៉ៅ សុភាព",
            position: "គ្រូបង្រៀន សីលធម៌-ពលរដ្ឋវិទ្យា",
            category: "social",
            roleLevel: "teacher",
            subject: "civics",
            degree: "បរិញ្ញាបត្រ សីលធម៌-ពលរដ្ឋវិទ្យា",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 045",
            email: "mao.sopheap@oudonghighschool.edu.kh",
            bio: "បង្រៀនសីលធម៌-ពលរដ្ឋវិទ្យា និងអប់រំចរិយាធម៌សង្គម។"
        },
        {
            id: 50,
            name: "លោក លឹម ម៉ារ៉ា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 046",
            email: "lim.mara@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលសកម្មភាពរៀនសូត្រ។"
        },
        {
            id: 51,
            name: "លោក ស៊ឹម ចន្ថា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/Mr Sim Chantha.jpg",
            phone: "012 111 047",
            email: "sim.chantha@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងអភិវឌ្ឍសមត្ថភាពចំណេះដឹងសិស្ស។"
        },
        {
            id: 52,
            name: "លោក ស៊ុម ម៉ារឌី",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 048",
            email: "sum.mardy@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយគាំទ្រការរៀនសូត្រផ្នែកវិទ្យាសាស្ត្រ។"
        },
        {
            id: 53,
            name: "លោក សុខ ម៉េងឡុង",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៥ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 049",
            email: "sok.menglong@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជំរុញការសិក្សាស្រាវជ្រាវរបស់សិស្ស។"
        },
        {
            id: 54,
            name: "លោក សុខ សម្បត្តិ",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 050",
            email: "sok.sombath@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលការសិក្សាក្នុងថ្នាក់រៀន។"
        },
        {
            id: 55,
            name: "លោក សុខុម បូរិទ្ធ",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 051",
            email: "sokhum.borith@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយពង្រឹងចំណេះដឹងវិទ្យាសាស្ត្រ។"
        },
        {
            id: 56,
            name: "លោកស្រី សៀង ទ្រា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 052",
            email: "sieng.trea@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលការរៀនសូត្ររបស់សិស្ស។"
        },
        {
            id: 57,
            name: "លោក សំ ចេក",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៦ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 053",
            email: "sam.chek@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងអភិវឌ្ឍសមត្ថភាពសិស្សានុសិស្ស។"
        },
        {
            id: 58,
            name: "លោកស្រី ហេង ដាណា",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 054",
            email: "heng.dana@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយគាំទ្រសកម្មភាពសិក្សាក្នុងថ្នាក់។"
        },
        {
            id: 59,
            name: "លោក ឡេង តារា",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៩ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 055",
            email: "leng.dara@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយពង្រឹងចំណេះដឹងដល់សិស្សានុសិស្ស។"
        },
        {
            id: 60,
            name: "លោកស្រី ឯក ចាន់ធីម",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "៨ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 056",
            email: "ek.chanthim@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងសម្របសម្រួលការសិក្សាក្នុងថ្នាក់រៀន។"
        },
        {
            id: 61,
            name: "លោកស្រី ឯម សុភាព",
            position: "គ្រូបង្រៀន",
            category: "social",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ អប់រំ",
            experience: "១០ ឆ្នាំ",
            image: "assets/images/staff/vice_principal.png",
            phone: "012 111 057",
            email: "em.sopheap@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងអភិវឌ្ឍសមត្ថភាពរៀនសូត្ររបស់សិស្ស។"
        },
        {
            id: 62,
            name: "លោក អ៊ី ធី",
            position: "គ្រូបង្រៀន",
            category: "stem",
            roleLevel: "teacher",
            subject: "general",
            degree: "បរិញ្ញាបត្រ វិទ្យាសាស្ត្រ",
            experience: "៧ ឆ្នាំ",
            image: "assets/images/staff/principal.png",
            phone: "012 111 058",
            email: "y.thy@oudonghighschool.edu.kh",
            bio: "គ្រូបង្រៀន និងជួយពង្រឹងសមត្ថភាពសិក្សាផ្នែកវិទ្យាសាស្ត្រ។"
        }
    ],

    // 2. ព័ត៌មាន និងសកម្មភាពសាលា (News & Activities)
    activities: [
        {
            id: 70,
            title: "ការតាំងពិព័រណ៌ស្នាដៃសិស្ស ឆ្នាំសិក្សា ២០២៥ ២០២៦",
            category: "news",
            date: "ថ្ងៃទី ០៤ ខែ សីហា ឆ្នាំ ២០២៦",
            author: "គណៈកម្មការ STEM & ICT",
            image: "assets/images/activities/04-08-26.jpg",
            images: [
                "assets/images/activities/04-08-26.jpg",
                "assets/images/activities/stem_fair.png",
                "assets/images/activities/sports_day.png"
            ],
            summary: "នៅក្នុងពិព័រណ៍ ឆ្នាំ២០២៦ នេះ សិស្សានុសិស្សថ្នាក់ទី១០ ដល់ទី១២ បានបង្ហាញស្នាដៃប្រឌិតបង្កើតថ្មីជាច្រើន",
            content: "នៅក្នុងពិព័រណ៍ ឆ្នាំ២០២៦ នេះ សិស្សានុសិស្សថ្នាក់ទី១០ ដល់ទី១២ បានបង្ហាញស្នាដៃប្រឌិតបង្កើតថ្មីជាច្រើន ដូចជា ប្រព័ន្ធស្រោចស្រពដំណាំស្វ័យប្រវត្តិ រ៉ូបូត និងគម្រោងបច្ចេកវិទ្យាជាច្រើនទៀត។\n\n# ស្នាដៃលេចធ្លោរបស់សិស្ស\nសិស្សានុសិស្សបានខិតខំប្រឹងប្រែងស្រាវជ្រាវ និងអនុវត្តផ្ទាល់អស់រយៈពេលជាច្រើនខែ ដោយមានការចង្អុលបង្ហាញយ៉ាងយកចិត្តទុកដាក់ពីលោកគ្រូអ្នកគ្រូដឹកនាំ។ គម្រោងនីមួយៗសុទ្ធសឹងតែឆ្លើយតបទៅនឹងតម្រូវការជាក់ស្តែងក្នុងសង្គម និងកសិកម្មទំនើប។\n\n# ការវាយតម្លៃ និងការលើកទឹកចិត្ត\nគណៈគ្រប់គ្រងសាលាបានផ្តល់ប័ណ្ណសរសើរ និងរង្វាន់លើកទឹកចិត្តដល់ក្រុមសិស្សដែលមានស្នាដៃឆ្នើម។ ព្រឹត្តិការណ៍នេះបានបង្កើនស្មារតីច្នៃប្រឌិត និងការស្រឡាញ់មុខវិជ្ជា STEM យ៉ាងខ្លាំងក្នុងចំណោមសិស្សានុសិស្សទាំងអស់។",
            views: 520,
            featured: true
        },
        {
            id: 63,
            title: "ពិព័រណ៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យា STEM ឆ្នាំ២០២៦",
            category: "stem",
            date: "២៨ កក្កដា ២០២៦",
            author: "គណៈកម្មការ STEM",
            image: "assets/images/activities/stem_fair.png",
            images: [
                "assets/images/activities/stem_fair.png",
                "assets/images/activities/04-08-26.jpg",
                "assets/images/knowledge/digital_learning.png"
            ],
            summary: "សិស្សានុសិស្សវិទ្យាល័យឧដុង្គបានបង្កើតគម្រោងរ៉ូបូត និងឧបករណ៍ស្វ័យប្រវត្តិកម្មឆ្លាតវៃចំនួន ២៥ គម្រោង...",
            content: "នៅក្នុងពិព័រណ៍ STEM ឆ្នាំ២០២៦ នេះ សិស្សានុសិស្សថ្នាក់ទី១០ ដល់ទី១២ បានបង្ហាញស្នាដៃប្រឌិតបង្កើតថ្មីជាច្រើន ដូចជា ប្រព័ន្ធស្រោចស្រពដំណាំស្វ័យប្រវត្តិដោយ solar cell, រ៉ូបូតសម្អាតថ្នាក់រៀន និងប្រព័ន្ធប្រកាសអាសន្នគ្រោះធម្មជាតិ។\n\n# គោលបំណងនៃពិព័រណ៍\nកម្មវិធីនេះមានគោលបំណងជំរុញឲ្យសិស្សានុសិស្សចេះអនុវត្តទ្រឹស្ដីដែលបានរៀនក្នុងថ្នាក់ ទៅជាការបង្កើតឧបករណ៍ប្រើប្រាស់ពិតប្រាកដក្នុងជីវភាពរស់នៅប្រចាំថ្ងៃ។\n\n- ការបង្កើតរ៉ូបូតកសិកម្ម\n- ប្រព័ន្ធគ្រប់គ្រងថាមពលសូឡា\n- ឧបករណ៍វាស់ស្ទង់គុណភាពខ្យល់ និងទឹក\n\nគណៈកម្មការបានវាយតម្លៃខ្ពស់ចំពោះគំនិតច្នៃប្រឌិត និងភាពប៉ិនប្រសប់របស់សិស្សានុសិស្សគ្រប់រូប។",
            views: 540,
            featured: true
        },
        {
            id: 64,
            title: "ការប្រកួតកីឡាបាល់ទះ និងបាល់ទាត់មិត្តភាពពានរង្វាន់ឧដុង្គ",
            category: "sports",
            date: "២២ កក្កដា ២០២៦",
            author: "គ្រូអប់រំកាយ",
            image: "assets/images/activities/sports_day.png",
            images: [
                "assets/images/activities/sports_day.png",
                "assets/images/banner/hero_bg.png"
            ],
            summary: "ការប្រកួតកីឡាប្រចាំឆ្នាំដើម្បីលើកកម្ពស់សុខភាព មិត្តភាព និងភាពសាមគ្គីរវាងសិស្សគ្រប់កម្រិតថ្នាក់...",
            content: "ព្រឹត្តិការណ៍កីឡាសាលាឆ្នាំនេះទទួលបានការចូលរួមពីក្រុមកីឡាករសិស្សចំនួន ១៦ ក្រុមមកពីគ្រប់កម្រិតថ្នាក់។ ក្រៅពីការប្រកួតបាល់ទះ និងបាល់ទាត់ ក៏មានការប្រកួតរត់ប្រណាំង និងល្បែងប្រជាប្រិយខ្មែរផងដែរ។\n\n# លទ្ធផលនៃការប្រកួត\nការប្រកួតបានប្រព្រឹត្តទៅដោយបរិយាកាសរីករាយ និងមានភាពស្និទ្ធស្នាលបំផុត។ ក្រុមបាល់ទាត់ថ្នាក់ទី១២A១ ទទួលបានជ័យលាភីលេខ១ អមដោយការអបអរសាទរយ៉ាងកកកុញពីសំណាក់សិស្សានុសិស្ស និងលោកគ្រូអ្នកគ្រូ។\n\nគោលបំណងសំខាន់គឺដើម្បីឲ្យសិស្សមានសុខភាពល្អ បញ្ជៀសផុតពីគ្រឿងញៀន និងពង្រឹងស្មារតីសាមគ្គីភាពក្រុម។",
            views: 420,
            featured: true
        },
        {
            id: 65,
            title: "យុទ្ធនាការដាំដើមឈើ និងលើកកម្ពស់បរិស្ថានបៃតងសាលារៀន",
            category: "community",
            date: "១៥ កក្កដា ២០២៦",
            author: "យុវជនកាកបាទក្រហមសាលា",
            image: "assets/images/activities/stem_fair.png",
            images: [
                "assets/images/activities/stem_fair.png",
                "assets/images/activities/sports_day.png"
            ],
            summary: "លោកគ្រូ អ្នកគ្រូ និងសិស្សានុសិស្សបានរួមគ្នាដាំដើមឈើហូបផ្លែ និងដើមឈើស្រមោលចំនួន ៣០០ ដើម...",
            content: "ដើម្បីចូលរួមចំណែកការពារបរិស្ថាន និងបង្កើតបរិយាកាសសិក្សាស្រស់បំព្រង ក្លឹបបរិស្ថានសាលាបានរៀបចំសកម្មភាពដាំដើមឈើជុំវិញបរិវេណសាលា និងដាំផ្កាលម្អមុខអាគារសិក្សា។\n\n# សកម្មភាពចម្បងៗ\n- ដាំដើមឈើស្រមោល និងដើមឈើហូបផ្លែចំនួន ៣០០ ដើម\n- សម្អាត និងបែងចែកសំរាមតាមបច្ចេកទេស ៣R\n- រៀបចំសួនផ្កាគំរូមុខអាគារសិក្សា\n\nសកម្មភាពនេះបណ្តុះស្មារតីស្រឡាញ់ธรรมชาติ និងការទទួលខុសត្រូវលើបរិស្ថានដល់យុវជនជំនាន់ក្រោយ។",
            views: 380,
            featured: false
        },
        {
            id: 66,
            title: "វគ្គបំប៉នពិសេសរៀបចំខ្លួនប្រឡងសញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)",
            category: "exam",
            date: "០៥ កក្កដា ២០២៦",
            author: "គណៈនាយកសាលា",
            image: "assets/images/knowledge/digital_learning.png",
            images: [
                "assets/images/knowledge/digital_learning.png",
                "assets/images/activities/04-08-26.jpg"
            ],
            summary: "ការបើកថ្នាក់បំប៉នដោយឥតគិតថ្លៃលើមុខវិជ្ជាគន្លឹះចំនួន ៧ សម្រាប់សិស្សថ្នាក់ទី១២ ទាំងអស់...",
            content: "វិទ្យាល័យឧដុង្គបានរៀបចំថ្នាក់រៀនបន្ថែមម៉ោងដោយមានការស្ម័គ្រចិត្តពីលោកគ្រូអ្នកគ្រូបទពិសោធន៍ខ្ពស់ ដើម្បីរំលឹកមេរៀន ធ្វើលំហាត់គំរូ និងដោះស្រាយវិញ្ញាសាប្រឡងឆ្នាំចាស់ៗ ជូនសិស្សថ្នាក់ទី១២ ត្រៀមប្រឡងបាក់ឌុបខាងមុខ។\n\n# មុខវិជ្ជាបំប៉នសំខាន់ៗ\nថ្នាក់បំប៉នផ្តោតលើមុខវិជ្ជា គណិតវិទ្យា, រូបវិទ្យា, គីមីវិទ្យា, ជីវវិទ្យា, អក្សរសាស្ត្រខ្មែរ, ប្រវត្តិវិទ្យា និងភាសាអង់គ្លេស។\n\nលោកគ្រូអ្នកគ្រូបានត្រៀមសន្លឹកកិច្ចការ និងវិធីសាស្ត្រដោះស្រាយលំហាត់លឿនៗ ជូនសិស្សានុសិស្សដើម្បីបង្កើនទំនុកចិត្តក្នុងការប្រឡង។",
            views: 890,
            featured: true
        }
    ],

    // 3. ចំណេះដឹងថ្មីៗ (Educational Articles & Knowledge)
    knowledge: [
        {
            id: 67,
            title: "វិធីសាស្ត្ររៀបចំកាលវិភាគស្វ័យសិក្សាឲ្យមានប្រសិទ្ធភាពខ្ពស់",
            category: "exam_tips",
            date: "២៥ កក្កដា ២០២៦",
            author: "លោកស្រី ចាន់ ធារី",
            image: "assets/images/knowledge/digital_learning.png",
            images: [
                "assets/images/knowledge/digital_learning.png",
                "assets/images/activities/stem_fair.png"
            ],
            readTime: "៥ នាទី",
            summary: "គន្លឹះសំខាន់ៗទាំង ៥ យ៉ាងក្នុងការបែងចែកពេលវេលាសិក្សា និងការប្រើប្រាស់បច្ចេកទេស Pomodoro Technique...",
            content: "ការសិក្សាទទួលបានផលល្អ មិនមែនទាមទារការទន្ទិញមេរៀនច្រើនម៉ោងជាប់គ្នានោះទេ ប៉ុន្តែគឺផ្អែកលើការផ្តោតអារម្មណ៍ និងការសម្រាកត្រូវតាមពេលវេលា។\n\n# គន្លឹះសំខាន់ៗទាំង ៥\n- ១. កំណត់គោលដៅសិក្សាច្បាស់លាស់ប្រចាំថ្ងៃ\n- ២. ប្រើប្រាស់បច្ចេកទេស Pomodoro (រៀន ២៥ នាទី សម្រាក ៥ នាទី)\n- ៣. រៀបចំកន្លែងសិក្សាឲ្យមានរបៀប និងស្ងប់ស្ងាត់\n- ៤. ធ្វើការកត់ត្រាសង្ខេប (Mind Mapping/Summary Notes)\n- ៥. ថែរក្សាសុខភាព ដេកលក់ឲ្យគ្រប់គ្រាន់ និងហាត់ប្រាណ\n\nការអនុវត្តតាមវិធីសាស្ត្រនេះជួយឲ្យសិស្សចងចាំមេរៀនបានយូរ និងមិនមានអារម្មណ៍តានតឹងមុនពេលប្រឡង។",
            downloadFile: "assets/docs/study_planner_template.pdf"
        },
        {
            id: 68,
            title: "ការប្រើប្រាស់ AI និងបច្ចេកវិទ្យាឌីជីថលក្នុងការស្រាវជ្រាវមេរៀន",
            category: "digital",
            date: "១៨ កក្កដា ២០២៦",
            author: "លោក សុខ វិសាល",
            image: "assets/images/knowledge/digital_learning.png",
            images: [
                "assets/images/knowledge/digital_learning.png",
                "assets/images/activities/04-08-26.jpg"
            ],
            readTime: "៧ នាទី",
            summary: "របៀបប្រើប្រាស់ប្រភពព័ត៌មានជឿជាក់លើអ៊ីនធឺណិត និងបណ្ណាល័យឌីជីថលសម្រាប់សិស្សវិទ្យាល័យ...",
            content: "បច្ចេកវិទ្យាឌីជីថល និងឧបករណ៍ AI អាចជាជំនួយការដ៏ល្អក្នុងការរៀនសូត្រ ប្រសិនបើប្រើប្រាស់ត្រូវទិសដៅ។ សិស្សអាចស្វែងរកមេរៀន វីដេអូពន្យល់ពិសោធន៍ និងបណ្ណាល័យអេឡិចត្រូនិចដោយសុវត្ថិភាព។\n\n# ប្រភពធនធានសិក្សាឌីជីថល\n- បណ្ណាល័យអេឡិចត្រូនិចរបស់ក្រសួងអប់រំ\n- វីដេអូបង្រៀនពិសោធន៍វិទ្យាសាស្ត្រលើ YouTube / EduTV\n- កម្មវិធីស្វែងរកឯកសារស្រាវជ្រាវ និងវចនានុក្រមអនឡាញ\n\nសិស្សានុសិស្សត្រូវចេះវិភាគ ផ្ទៀងផ្ទាត់ប្រភពព័ត៌មាន និងប្រើប្រាស់បច្ចេកវិទ្យាដោយការទទួលខុសត្រូវ។",
            downloadFile: "assets/docs/digital_learning_guide.pdf"
        },
        {
            id: 69,
            title: "រូបមន្ត និងគន្លឹះដោះស្រាយលំហាត់រូបវិទ្យា និងគណិតវិទ្យាថ្នាក់ទី១២",
            category: "stem",
            date: "១០ កក្កដា ២០២៦",
            author: "លោក គឹម សុជាតិ",
            image: "assets/images/activities/stem_fair.png",
            images: [
                "assets/images/activities/stem_fair.png",
                "assets/images/knowledge/digital_learning.png"
            ],
            readTime: "១០ នាទី",
            summary: "សង្ខេបសន្លឹកកិច្ចការរូបមន្តសំខាន់ៗ និងវិធីសាស្ត្រគណនាលឿន និងត្រឹមត្រូវ...",
            content: "ចងក្រងរូបមន្តសំខាន់ៗលើមុខវិជ្ជារូបវិទ្យា និងគណិតវិទ្យា សម្រាប់សិស្សស្វ័យសិក្សា និងដោះស្រាយលំហាត់គំរូ step-by-step។\n\n# គន្លឹះដោះស្រាយលំហាត់\n- អានប្រធានលំហាត់ឲ្យយល់ច្បាស់ និងស្រង់បម្រាប់\n- ជ្រើសរើសរូបមន្តដែលត្រូវគ្នា និងប្តូរខ្នាតឲ្យត្រូវតាមប្រព័ន្ធអន្តរជាតិ (SI)\n- ពិនិត្យមើលលទ្ធផលគណនាចុងក្រោយ\n\nទាញយកសន្លឹកកិច្ចការ PDF ខាងក្រោមដើម្បីសិក្សាបន្ថែមនៅផ្ទះ។",
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
    ],

    // 5. ផ្ទៃខាងក្រោយស្លាយ Hero (Hero Background Slideshow)
    // អាចបន្ថែមរូបភាពថ្មីៗចូលក្នុង Folder assets/images/slide/ ហើយថែម Path រូបភាពទីនេះបានដោយគ្មានបញ្ហា
    heroSlides: [
        "assets/images/slide/slide1.png",
        "assets/images/slide/slide2.png",
        "assets/images/slide/slide3.png"
    ]
};

// ==========================================
// INDEXEDDB & LOCAL STORAGE DATABASE SYSTEM
// ==========================================

const DB_NAME = 'OudongHighSchoolDB';
const DB_VERSION = 1;
let dbInstance = null;

// Initialize IndexedDB Database Engine
function initIndexedDB() {
    return new Promise((resolve, reject) => {
        if (!window.indexedDB) {
            console.warn("IndexedDB is not supported in this browser. Falling back to localStorage.");
            return resolve(null);
        }

        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = (event) => {
            console.error("IndexedDB initialization error:", event.target.error);
            resolve(null);
        };

        request.onsuccess = (event) => {
            dbInstance = event.target.result;
            console.log("IndexedDB database connected successfully.");
            loadDataFromIndexedDB();
            resolve(dbInstance);
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const collections = ['activities', 'knowledge', 'standards', 'staff'];
            collections.forEach(storeName => {
                if (!db.objectStoreNames.contains(storeName)) {
                    db.createObjectStore(storeName, { keyPath: 'id' });
                }
            });
        };
    });
}

// Load data from IndexedDB into SCHOOL_DATA for permanent large-file/base64 image storage
function loadDataFromIndexedDB() {
    if (!dbInstance) return;
    try {
        const collections = ['activities', 'knowledge', 'standards', 'staff'];
        const tx = dbInstance.transaction(collections, 'readonly');
        let updatedCount = 0;

        collections.forEach(name => {
            const store = tx.objectStore(name);
            const req = store.getAll();
            req.onsuccess = () => {
                if (req.result && Array.isArray(req.result) && req.result.length > 0) {
                    SCHOOL_DATA[name] = req.result;
                    updatedCount++;
                    
                    // Re-render UI views dynamically when IndexedDB data loads
                    if (name === 'activities' && typeof renderActivities === 'function') {
                        renderActivities(document.querySelector('#activity-filters .filter-btn.active')?.getAttribute('data-filter') || 'all');
                    }
                    if (name === 'knowledge' && typeof renderKnowledge === 'function') {
                        renderKnowledge('all');
                    }
                    if (name === 'staff' && typeof renderStaff === 'function') {
                        renderStaff(typeof currentStaffCategory !== 'undefined' ? currentStaffCategory : 'all', typeof currentStaffSubject !== 'undefined' ? currentStaffSubject : 'all');
                    }
                    if (name === 'standards' && typeof renderStandards === 'function') {
                        renderStandards();
                    }
                }
            };
        });
    } catch (e) {
        console.warn("IndexedDB load warning:", e);
    }
}

// Sync all collections into IndexedDB
function syncIndexedDBWithSchoolData() {
    if (!dbInstance) return;
    try {
        const collections = ['activities', 'knowledge', 'standards', 'staff'];
        const tx = dbInstance.transaction(collections, 'readwrite');
        collections.forEach(name => {
            const store = tx.objectStore(name);
            store.clear();
            if (Array.isArray(SCHOOL_DATA[name])) {
                SCHOOL_DATA[name].forEach(item => store.put(item));
            }
        });
    } catch (e) {
        console.warn("IndexedDB sync warning:", e);
    }
}

// Load persisted items from localStorage into SCHOOL_DATA
(function loadPersistedSchoolData() {
    try {
        const savedActivities = localStorage.getItem('oudong_custom_activities');
        if (savedActivities) {
            const parsed = JSON.parse(savedActivities);
            if (Array.isArray(parsed) && parsed.length > 0) {
                parsed.forEach(item => {
                    if (item.image === 'assets/images/activities/04_08_2026.jpg') {
                        item.image = 'assets/images/activities/04-08-26.jpg';
                    }
                });
                SCHOOL_DATA.activities = parsed;
            }
        }

        const savedKnowledge = localStorage.getItem('oudong_custom_knowledge');
        if (savedKnowledge) {
            const parsed = JSON.parse(savedKnowledge);
            if (Array.isArray(parsed) && parsed.length > 0) {
                parsed.forEach(item => {
                    if (item.image === 'assets/images/activities/04_08_2026.jpg') {
                        item.image = 'assets/images/activities/04-08-26.jpg';
                    }
                });
                SCHOOL_DATA.knowledge = parsed;
            }
        }

        const savedStandards = localStorage.getItem('oudong_custom_standards');
        if (savedStandards) {
            const parsed = JSON.parse(savedStandards);
            if (Array.isArray(parsed) && parsed.length > 0) {
                SCHOOL_DATA.standards = parsed;
            }
        }

        const savedStaff = localStorage.getItem('oudong_custom_staff');
        if (savedStaff) {
            const parsed = JSON.parse(savedStaff);
            if (Array.isArray(parsed) && parsed.length > 0) {
                SCHOOL_DATA.staff = parsed;
            }
        }
    } catch (e) {
        console.warn("Unable to load custom SCHOOL_DATA from localStorage:", e);
    }

    // Initialize IndexedDB in background
    initIndexedDB();
})();

// Helper function to save current SCHOOL_DATA collections to localStorage & IndexedDB
function saveSchoolData(collectionName) {
    // 1. Save to localStorage (with fallback if Base64 images exceed 5MB quota)
    try {
        if (collectionName === 'activities' || !collectionName) {
            localStorage.setItem('oudong_custom_activities', JSON.stringify(SCHOOL_DATA.activities));
        }
        if (collectionName === 'knowledge' || !collectionName) {
            localStorage.setItem('oudong_custom_knowledge', JSON.stringify(SCHOOL_DATA.knowledge));
        }
        if (collectionName === 'standards' || !collectionName) {
            localStorage.setItem('oudong_custom_standards', JSON.stringify(SCHOOL_DATA.standards));
        }
        if (collectionName === 'staff' || !collectionName) {
            localStorage.setItem('oudong_custom_staff', JSON.stringify(SCHOOL_DATA.staff));
        }
    } catch (e) {
        console.warn("localStorage quota reached for large images. Data will be saved permanently in IndexedDB:", e);
    }

    // 2. Always sync to IndexedDB (supports large Base64 images up to hundreds of MBs)
    syncIndexedDBWithSchoolData();
}

// Reset database to factory defaults
function resetSchoolDataToDefault() {
    if (confirm("តើអ្នកប្រាកដជាចង់កំណត់ទិន្នន័យទាំងអស់ទៅជាទិន្នន័យដើមវិញមែនទេ?")) {
        localStorage.removeItem('oudong_custom_activities');
        localStorage.removeItem('oudong_custom_knowledge');
        localStorage.removeItem('oudong_custom_standards');
        localStorage.removeItem('oudong_custom_staff');
        
        if (dbInstance) {
            try {
                const collections = ['activities', 'knowledge', 'standards', 'staff'];
                const tx = dbInstance.transaction(collections, 'readwrite');
                collections.forEach(name => tx.objectStore(name).clear());
            } catch (e) {}
        }
        window.location.reload();
    }
}

// ==========================================
// DATABASE BACKUP & RESTORE UTILITIES (.json)
// ==========================================

// Export Database as JSON File
function exportDatabaseBackup() {
    const backupData = {
        version: "1.0",
        appName: "Oudong High School Database Backup",
        exportDate: new Date().toISOString(),
        data: {
            info: SCHOOL_DATA.info,
            staff: SCHOOL_DATA.staff,
            activities: SCHOOL_DATA.activities,
            knowledge: SCHOOL_DATA.knowledge,
            standards: SCHOOL_DATA.standards
        }
    };

    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().split('T')[0];
    a.href = url;
    a.download = `oudong_highschool_db_backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Import Database from JSON File
function importDatabaseBackup(file, callback) {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (imported && imported.data) {
                if (Array.isArray(imported.data.staff)) SCHOOL_DATA.staff = imported.data.staff;
                if (Array.isArray(imported.data.activities)) SCHOOL_DATA.activities = imported.data.activities;
                if (Array.isArray(imported.data.knowledge)) SCHOOL_DATA.knowledge = imported.data.knowledge;
                if (Array.isArray(imported.data.standards)) SCHOOL_DATA.standards = imported.data.standards;

                saveSchoolData(); // Saves to both localStorage & IndexedDB

                if (typeof callback === 'function') {
                    callback(true, "បាននាំចូល និងស្តារទិន្នន័យ (Database Import) ដោយជោគជ័យ!");
                }
            } else {
                throw new Error("ទម្រង់ឯកសារ Backup មិនត្រឹមត្រូវ!");
            }
        } catch (err) {
            console.error("Database import error:", err);
            if (typeof callback === 'function') {
                callback(false, `បរាជ័យក្នុងការស្ដារទិន្នន័យ៖ ${err.message}`);
            }
        }
    };
    reader.readAsText(file);
}

