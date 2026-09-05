import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Familiar 529",
  shortName: "Clínica Hispana",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, urgencias menores, laboratorio y más.",
  baseUrl: "https://www.clinica529.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "15003 FM 529 B",
  city: "Houston",
  state: "TX",
  zip: "77095",
  phone: "+12816947250",
  phoneFormatted: "+1 (281) 694-7250",
  email: "clinicafamiliar529@gmail.com",
  hours: "Lunes a Sábado: 9:00 AM - 9:00 PM · Domingo: 9:00 AM - 5:00 PM",
  hoursWeekday: "Lunes a Sábado: 9:00 AM - 9:00 PM",
  hoursWeekend: "Domingo: 9:00 AM - 5:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/Clinica+Hispana+Familiar+529+15003+FM+529+B+Houston+TX+77095",
  googleMapsEmbed: `https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY}&q=place_id:ChIJoTKGTSzRQIYRBpXCnC2Jno4&zoom=17`,
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJoTKGTSzRQIYRBpXCnC2Jno4",
  placeId: "ChIJoTKGTSzRQIYRBpXCnC2Jno4",
  coordinates: {
    lat: 29.8787532,
    lng: -95.6343355,
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/clinicafamiliar529",
  instagram: "https://www.instagram.com/clinicafamiliar529/",
  google: "https://g.co/kgs/1RwVVhT",
};

// Google Reviews data - fallback si la Places API no responde.
// Valores reales del listado de Google (Places API, jul 2026).
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 565,
  averageRating: 5.0,
  placeId: "ChIJoTKGTSzRQIYRBpXCnC2Jno4",
};

// Landing conquesting: usa el número principal mientras el cliente no tenga un
// número CallRail dedicado para esa landing.
export const CONQUESTING_PHONE = {
  phone: "+12816947250",
  phoneFormatted: "+1 (281) 694-7250",
} as const;

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "title": "Control de Diabetes, Hipertensión y Colesterol",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Control de diabetes, hipertensión y dislipidemias en Houston, TX. Laboratorio y seguimiento en español, con precios accesibles.",
    "descriptionEn": "Diabetes, hypertension and dyslipidemia management in Houston, TX. Lab work and follow-up in Spanish, with affordable pricing.",
    "longDescription": "Las enfermedades crónicas como la diabetes, la hipertensión y las dislipidemias (colesterol y triglicéridos altos) se controlan mejor con seguimiento constante. En Clínica Hispana Familiar 529 diseñamos un plan claro y te acompañamos paso a paso, en español.\n\n**¿Qué incluye?**\n- Evaluación inicial y exámenes de laboratorio\n- Monitoreo de glucosa, presión arterial, colesterol y triglicéridos\n- Ajuste de medicamentos según tu evolución\n- Plan de alimentación y actividad física\n- Educación sobre tu condición en tu idioma\n\n**Por qué es importante el control**\nUna diabetes, presión o colesterol mal controlados dañan con el tiempo el corazón, los riñones, los ojos y los nervios. Un buen seguimiento previene complicaciones y mejora tu calidad de vida.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Chronic conditions like diabetes, hypertension and dyslipidemia (high cholesterol and triglycerides) are best controlled with consistent follow-up. At Clínica Hispana Familiar 529 we design a clear plan and support you every step of the way, in Spanish.\n\n**What's included?**\n- Initial evaluation and lab work\n- Monitoring of glucose, blood pressure, cholesterol and triglycerides\n- Medication adjustment based on your progress\n- Nutrition and physical-activity plan\n- Education about your condition in your language\n\n**Why control matters**\nPoorly managed diabetes, blood pressure or cholesterol damage the heart, kidneys, eyes and nerves over time. Good follow-up prevents complications and improves your quality of life.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston"
    ],
    "keywordsEn": [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston"
    ],
    "features": [
      "Diagnóstico y monitoreo de laboratorio",
      "Control de glucosa, presión y colesterol",
      "Ajuste de medicamentos",
      "Plan de alimentación y hábitos"
    ],
    "featuresEn": [
      "Diagnosis and lab monitoring",
      "Glucose, blood pressure and cholesterol control",
      "Medication adjustment",
      "Nutrition and lifestyle plan"
    ],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "La tiroides regula tu energía, tu peso y tu ánimo. Cuando funciona de más o de menos aparecen síntomas que afectan tu día a día. En Clínica Hispana Familiar 529 evaluamos tu tiroides con análisis de laboratorio y te damos el tratamiento adecuado.\n\n**¿Qué incluye?**\n- Evaluación de síntomas\n- Pruebas de función tiroidea (TSH, T3, T4)\n- Diagnóstico de hipotiroidismo o hipertiroidismo\n- Inicio y ajuste del tratamiento\n- Seguimiento periódico\n\n**Síntomas frecuentes**\nCansancio, cambios de peso sin explicación, caída del cabello, frío o calor excesivo, nerviosismo o tristeza. Si los notas, una prueba sencilla puede dar la respuesta.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "The thyroid regulates your energy, weight and mood. When it works too much or too little, symptoms appear that affect your daily life. At Clínica Hispana Familiar 529 we evaluate your thyroid with lab work and provide the right treatment.\n\n**What's included?**\n- Symptom evaluation\n- Thyroid function tests (TSH, T3, T4)\n- Diagnosis of hypothyroidism or hyperthyroidism\n- Treatment start and adjustment\n- Periodic follow-up\n\n**Common symptoms**\nFatigue, unexplained weight changes, hair loss, feeling too cold or too hot, nervousness or sadness. If you notice them, a simple test can give the answer.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston"
    ],
    "keywordsEn": [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston"
    ],
    "features": [
      "Pruebas de función tiroidea (TSH, T3, T4)",
      "Diagnóstico de hipo e hipertiroidismo",
      "Tratamiento y ajuste de medicamentos",
      "Seguimiento en español"
    ],
    "featuresEn": [
      "Thyroid function tests (TSH, T3, T4)",
      "Diagnosis of hypo- and hyperthyroidism",
      "Treatment and medication adjustment",
      "Follow-up in Spanish"
    ],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "Las alergias pueden afectar tu respiración, tu piel y tu descanso. En Clínica Hispana Familiar 529 identificamos qué las provoca y te ayudamos a controlarlas para que recuperes tu bienestar.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y posibles desencadenantes\n- Tratamiento de alergias estacionales y respiratorias\n- Manejo de rinitis, estornudos y congestión\n- Atención de alergias en la piel (ronchas, comezón)\n- Recomendaciones para evitar las crisis\n\n**Cuándo consultar**\nEstornudos frecuentes, ojos llorosos, comezón, ronchas o congestión que no mejora son señales de alergia. Un tratamiento adecuado marca la diferencia.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Allergies can affect your breathing, your skin and your rest. At Clínica Hispana Familiar 529 we identify what triggers them and help you control them so you feel well again.\n\n**What's included?**\n- Evaluation of symptoms and possible triggers\n- Treatment of seasonal and respiratory allergies\n- Management of rhinitis, sneezing and congestion\n- Care for skin allergies (hives, itching)\n- Recommendations to avoid flare-ups\n\n**When to seek care**\nFrequent sneezing, watery eyes, itching, hives or congestion that won't improve are signs of allergy. The right treatment makes the difference.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston"
    ],
    "keywordsEn": [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston"
    ],
    "features": [
      "Evaluación de síntomas y desencadenantes",
      "Tratamiento de alergias respiratorias y de piel",
      "Manejo de rinitis y congestión",
      "Atención en español"
    ],
    "featuresEn": [
      "Evaluation of symptoms and triggers",
      "Treatment of respiratory and skin allergies",
      "Management of rhinitis and congestion",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "Cuando empiezan la fiebre, la tos o el malestar, saber si es flu o COVID ayuda a tratarte a tiempo. En Clínica Hispana Familiar 529 hacemos pruebas rápidas y te damos tratamiento el mismo día, sin cita.\n\n**¿Qué incluye?**\n- Prueba rápida de influenza (flu)\n- Prueba de COVID-19\n- Evaluación de síntomas respiratorios\n- Tratamiento de gripe, tos, bronquitis e infecciones de garganta\n- Indicaciones de recuperación y cuidado\n\n**No dejes que avance**\nSi la fiebre es alta, la tos no mejora o cuesta respirar, es mejor evaluarte. Un diagnóstico oportuno acorta la enfermedad y evita complicaciones.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "When fever, cough or discomfort begin, knowing whether it's flu or COVID helps treat you in time. At Clínica Hispana Familiar 529 we run rapid tests and provide same-day treatment, no appointment needed.\n\n**What's included?**\n- Rapid influenza (flu) test\n- COVID-19 test\n- Respiratory symptom evaluation\n- Treatment of flu, cough, bronchitis and throat infections\n- Recovery and care instructions\n\n**Don't let it progress**\nIf the fever is high, the cough won't improve or breathing is hard, it's best to get evaluated. Timely diagnosis shortens the illness and prevents complications.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston"
    ],
    "keywordsEn": [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston"
    ],
    "features": [
      "Prueba rápida de flu y COVID",
      "Diagnóstico el mismo día",
      "Tratamiento de gripe, tos y bronquitis",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Same-day diagnosis",
      "Treatment of flu, cough and bronchitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "metaTitle": "Examen Físico Escolar y Deportivo en Houston | Clínica Hispana Familiar 529",
    "metaTitleEn": "School & Sports Physical Exams in Houston | Clínica Hispana Familiar 529",
    "shortTitle": "Examen Físico",
    "description": "Chequeos físicos escolares y deportivos en Houston, TX. Rápidos, en español y con precios accesibles.",
    "descriptionEn": "School and sports physical exams in Houston, TX. Fast, in Spanish, with affordable pricing.",
    "longDescription": "Antes de inscribirse en la escuela o practicar un deporte, los niños y jóvenes necesitan un chequeo físico. En Clínica Hispana Familiar 529 lo hacemos de forma rápida y completa, con todos los formularios listos.\n\n**¿Qué incluye?**\n- Examen físico general\n- Revisión de signos vitales (peso, talla, presión)\n- Evaluación de visión y audición\n- Llenado de los formularios requeridos\n- Recomendaciones de salud\n\n**Para la escuela y el deporte**\nCumple los requisitos de inscripción escolar y la evaluación para practicar deportes con seguridad. Trae el formulario de tu escuela o equipo y lo completamos.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Before enrolling in school or playing a sport, children and teens need a physical exam. At Clínica Hispana Familiar 529 we do it quickly and thoroughly, with all the forms ready.\n\n**What's included?**\n- General physical exam\n- Vital-signs check (weight, height, blood pressure)\n- Vision and hearing screening\n- Completion of required forms\n- Health recommendations\n\n**For school and sports**\nMeet school enrollment requirements and the evaluation to play sports safely. Bring your school or team form and we'll complete it.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston"
    ],
    "keywordsEn": [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston"
    ],
    "features": [
      "Examen físico completo",
      "Revisión de signos vitales",
      "Formularios escolares y deportivos llenados",
      "Atención en español"
    ],
    "featuresEn": [
      "Complete physical exam",
      "Vital-signs check",
      "School and sports forms completed",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "title": "Atención Ginecológica: Papanicolaou y Cultivos",
    "titleEn": "Gynecology Care: Pap Smear & Cultures",
    "metaTitle": "Ginecología en Houston: Papanicolaou y Cultivos | Clínica Hispana Familiar 529",
    "metaTitleEn": "Gynecology in Houston: Pap Smear & Cultures | Clínica Hispana Familiar 529",
    "shortTitle": "Ginecología",
    "description": "Atención ginecológica en Houston, TX: papanicolaou, cultivos vaginales y tratamiento de infecciones. En español, con precios accesibles.",
    "descriptionEn": "Gynecology care in Houston, TX: Pap smear, vaginal cultures and infection treatment. In Spanish, with affordable pricing.",
    "longDescription": "La consulta ginecológica en Clínica Hispana Familiar 529 incluye el Papanicolaou, cultivos vaginales y el tratamiento de infecciones vaginales, en español y sin cita previa, en el noroeste de Houston. No se requiere seguro médico. Atendemos de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM.\n\n**¿Qué incluye la consulta ginecológica?**\n- Papanicolaou (citología cervical) para detectar cambios en el cuello uterino\n- Cultivo vaginal para identificar hongos, bacterias o tricomonas\n- Tratamiento de infecciones vaginales con receta el mismo día\n- Evaluación de flujo anormal, comezón, ardor, mal olor o dolor pélvico\n- Orden de mamografía y referencia a especialista cuando se necesita\n\n**¿Cada cuánto debo hacerme el Papanicolaou?**\nLas guías de Estados Unidos recomiendan el primer Papanicolaou a los 21 años. De los 21 a los 29 años se repite cada 3 años. De los 30 a los 65 años se repite cada 3 años, o cada 5 años si se combina con la prueba de VPH. Si tuviste un resultado anormal, el médico indicará un control más frecuente.\n\n**¿Cómo me preparo para el Papanicolaou?**\n1. Elige un día en que no tengas sangrado menstrual abundante.\n2. Evita relaciones sexuales, duchas vaginales, tampones y cremas u óvulos vaginales durante las 48 horas previas.\n3. Trae una identificación y, si los tienes, los resultados de Papanicolaou anteriores.\n4. Anota tus síntomas, la fecha de tu última menstruación y los medicamentos que tomas.\n\n**¿Cómo es el procedimiento y cuánto dura?**\nLa toma de la muestra dura entre 2 y 5 minutos. El médico coloca un espéculo, toma células del cuello uterino con un cepillo suave y las envía al laboratorio. Puede causar una leve molestia, no dolor, y puedes retomar tus actividades de inmediato. Si también se necesita un cultivo, se toma en la misma visita. Pregunta en tu consulta cuándo estarán listos los resultados.\n\n**¿Cuándo debo acudir sin esperar al chequeo anual?**\n- Flujo con cambio de color, cantidad o mal olor\n- Comezón o ardor vaginal\n- Dolor al orinar o durante las relaciones sexuales\n- Sangrado fuera de la menstruación o después de las relaciones\n- Dolor en la parte baja del abdomen\n\n**¿Hay un paquete de chequeo para la mujer?**\nSí. La clínica ofrece un chequeo completo de la mujer que incluye Papanicolaou, examen de orina, orden de mamografía y consulta ginecológica, con precio fijo publicado en la página de promociones.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "The gynecology visit at Clínica Hispana Familiar 529 includes the Pap smear, vaginal cultures and treatment of vaginal infections, in Spanish and with no appointment needed, in northwest Houston. No health insurance is required. We are open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM.\n\n**What does the gynecology visit include?**\n- Pap smear (cervical cytology) to detect changes in the cervix\n- Vaginal culture to identify yeast, bacteria or trichomonas\n- Treatment of vaginal infections with a same-day prescription\n- Evaluation of abnormal discharge, itching, burning, odor or pelvic pain\n- Mammogram order and specialist referral when needed\n\n**How often should I get a Pap smear?**\nU.S. guidelines recommend the first Pap smear at age 21. From 21 to 29 it is repeated every 3 years. From 30 to 65 it is repeated every 3 years, or every 5 years when combined with an HPV test. If you had an abnormal result, your doctor will schedule closer follow-up.\n\n**How do I prepare for a Pap smear?**\n1. Choose a day when you do not have heavy menstrual bleeding.\n2. Avoid intercourse, douching, tampons and vaginal creams or suppositories for 48 hours before the visit.\n3. Bring an ID and, if you have them, your previous Pap results.\n4. Write down your symptoms, the date of your last period and the medications you take.\n\n**What is the procedure like and how long does it take?**\nCollecting the sample takes 2 to 5 minutes. The doctor places a speculum, gathers cells from the cervix with a soft brush and sends them to the lab. It may cause mild discomfort, not pain, and you can resume your activities right away. If a culture is also needed, it is taken during the same visit. Ask during your visit when results will be ready.\n\n**When should I come in without waiting for my annual checkup?**\n- Discharge that changes in color, amount or odor\n- Vaginal itching or burning\n- Pain when urinating or during intercourse\n- Bleeding between periods or after intercourse\n- Pain in the lower abdomen\n\n**Is there a women's checkup package?**\nYes. The clinic offers a complete women's checkup that includes a Pap smear, urine test, mammogram order and gynecology consultation, with a fixed price listed on the promotions page.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston"
    ],
    "features": [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español"
    ],
    "featuresEn": [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish"
    ],
    "highlighted": true,
    "order": 6,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Examen y diagnóstico de embarazo en Houston, TX. Pruebas confiables y orientación en español, con precios accesibles.",
    "descriptionEn": "Pregnancy testing and confirmation in Houston, TX. Reliable tests and guidance in Spanish, with affordable pricing.",
    "longDescription": "Si crees que podrías estar embarazada, una prueba confiable te da tranquilidad y claridad. En Clínica Hispana Familiar 529 realizamos pruebas de embarazo y te orientamos sobre lo que sigue, en español y sin juicios.\n\n**¿Qué incluye?**\n- Prueba de embarazo (orina o sangre)\n- Confirmación médica del resultado\n- Orientación sobre tus siguientes pasos\n- Información sobre control prenatal y referencias\n\n**Con confianza y respeto**\nTe explicamos el resultado con claridad y te acompañamos en la decisión que tomes, siempre con respeto y privacidad.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "If you think you might be pregnant, a reliable test gives you peace of mind and clarity. At Clínica Hispana Familiar 529 we perform pregnancy tests and guide you on what comes next, in Spanish and without judgment.\n\n**What's included?**\n- Pregnancy test (urine or blood)\n- Medical confirmation of the result\n- Guidance on your next steps\n- Information on prenatal care and referrals\n\n**With trust and respect**\nWe explain the result clearly and support you in whatever decision you make, always with respect and privacy.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston"
    ],
    "keywordsEn": [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston"
    ],
    "features": [
      "Prueba de embarazo confiable",
      "Confirmación médica",
      "Orientación sobre próximos pasos",
      "Atención en español"
    ],
    "featuresEn": [
      "Reliable pregnancy test",
      "Medical confirmation",
      "Guidance on next steps",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "Decidir cuándo y cómo formar tu familia es tu derecho. En Clínica Hispana Familiar 529 te damos información clara y sin juicios para que elijas el método anticonceptivo que mejor se adapta a ti.\n\n**¿Qué incluye?**\n- Consulta de orientación personalizada\n- Información sobre los distintos métodos\n- Pastillas anticonceptivas e inyección\n- Inicio y seguimiento del método elegido\n- Resolución de dudas y efectos secundarios\n\n**Una decisión informada**\nCada cuerpo y cada vida es distinta. Te ayudamos a comparar opciones según tu salud, tus planes y tu comodidad para que tomes la mejor decisión.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Deciding when and how to build your family is your right. At Clínica Hispana Familiar 529 we give you clear, judgment-free information so you can choose the contraceptive method that best fits you.\n\n**What's included?**\n- Personalized guidance visit\n- Information about the different methods\n- Birth control pills and injection\n- Starting and following up on the chosen method\n- Answers to questions and side effects\n\n**An informed decision**\nEvery body and every life is different. We help you compare options based on your health, your plans and your comfort so you make the best decision.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston"
    ],
    "keywordsEn": [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston"
    ],
    "features": [
      "Orientación personalizada",
      "Pastillas e inyección anticonceptiva",
      "Inicio y seguimiento del método",
      "Atención en español"
    ],
    "featuresEn": [
      "Personalized guidance",
      "Birth control pills and injection",
      "Method start and follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "Si llegó el momento de retirar tu implante subdérmico —porque caducó o porque deseas cambiar de método— en Clínica Hispana Familiar 529 lo hacemos de forma segura, rápida y con cuidado.\n\n**¿Qué incluye?**\n- Evaluación y localización del implante\n- Extracción ambulatoria con anestesia local\n- Indicaciones claras de cuidado posterior\n- Orientación sobre tus próximos pasos de planificación\n\n**Un procedimiento sencillo**\nEl retiro suele tomar pocos minutos y se realiza con una pequeña incisión. Te explicamos cada paso en español para que estés tranquila.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "If it's time to remove your subdermal implant —because it expired or you want to switch methods— at Clínica Hispana Familiar 529 we do it safely, quickly and with care.\n\n**What's included?**\n- Evaluation and location of the implant\n- Outpatient removal with local anesthesia\n- Clear after-care instructions\n- Guidance on your next family-planning steps\n\n**A simple procedure**\nRemoval usually takes only a few minutes through a small incision. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston"
    ],
    "keywordsEn": [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston"
    ],
    "features": [
      "Procedimiento ambulatorio",
      "Anestesia local",
      "Personal capacitado",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedure",
      "Local anesthesia",
      "Trained staff",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "title": "Exámenes del Hombre: PSA y Testosterona",
    "titleEn": "Men's Health Exams: PSA & Testosterone",
    "metaTitle": "Examen de Próstata (PSA) y Testosterona en Houston | Clínica Hispana Familiar 529",
    "metaTitleEn": "Prostate (PSA) & Testosterone Testing in Houston | Clínica Hispana Familiar 529",
    "shortTitle": "Salud del Hombre",
    "description": "Exámenes del hombre en Houston, TX: PSA y testosterona. Laboratorio y atención en español, con precios accesibles.",
    "descriptionEn": "Men's health exams in Houston, TX: PSA and testosterone. Lab work and care in Spanish, with affordable pricing.",
    "longDescription": "El chequeo de salud del hombre en Clínica Hispana Familiar 529 incluye el examen de próstata en sangre (PSA), la medición de testosterona y una consulta médica en español. Sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el chequeo del hombre?**\n- Antígeno prostático específico (PSA) en sangre\n- Nivel de testosterona total\n- Toma de presión arterial, peso y signos vitales\n- Evaluación de síntomas urinarios, sexuales, de energía o de ánimo\n- Examen de orina y referencia a urólogo cuando se requiere\n\n**¿A qué edad debo revisarme la próstata?**\nLas guías recomiendan conversar con el médico sobre la prueba de PSA entre los 55 y los 69 años. Conviene empezar antes, alrededor de los 45, si tienes padre o hermano con cáncer de próstata o eres afroamericano. Con síntomas urinarios, la revisión se hace a cualquier edad.\n\n**¿Cómo me preparo para el PSA y la testosterona?**\n1. Evita la eyaculación durante las 48 horas previas al PSA, porque puede elevar el resultado.\n2. Si tuviste una infección urinaria o de próstata reciente, espera a completar el tratamiento, ya que la inflamación altera el PSA.\n3. La testosterona se mide mejor por la mañana, entre las 7 y las 10 AM, cuando está en su nivel más alto.\n4. Trae la lista de tus medicamentos; algunos, como los usados para la próstata, modifican el PSA.\n\n**¿Qué síntomas indican testosterona baja?**\n- Cansancio constante y menos energía\n- Disminución del deseo sexual o dificultad para la erección\n- Pérdida de masa muscular y aumento de grasa abdominal\n- Cambios de ánimo, irritabilidad o dificultad para concentrarse\n\n**¿Qué pasa si el PSA sale alto?**\nUn PSA elevado no significa cáncer. Puede deberse a próstata agrandada, inflamación o infección. El médico valora el resultado según tu edad y tus síntomas, puede repetir la prueba en unas semanas y, si es necesario, te refiere al urólogo.\n\n**¿Hay un paquete de chequeo para hombres?**\nSí. La clínica ofrece un chequeo completo para hombres que incluye examen de orina, examen de próstata, testosterona y consulta médica, con precio fijo publicado en la página de promociones.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "The men's health checkup at Clínica Hispana Familiar 529 includes the prostate blood test (PSA), testosterone measurement and a medical consultation in Spanish. No appointment and no insurance needed, in northwest Houston.\n\n**What does the men's checkup include?**\n- Prostate-specific antigen (PSA) blood test\n- Total testosterone level\n- Blood pressure, weight and vital signs\n- Evaluation of urinary, sexual, energy or mood symptoms\n- Urine test and urologist referral when needed\n\n**At what age should I get my prostate checked?**\nGuidelines recommend discussing the PSA test with your doctor between ages 55 and 69. It makes sense to start earlier, around 45, if your father or brother had prostate cancer or if you are African American. With urinary symptoms, the check is done at any age.\n\n**How do I prepare for the PSA and testosterone tests?**\n1. Avoid ejaculation for 48 hours before the PSA test, since it can raise the result.\n2. If you recently had a urinary or prostate infection, wait until treatment is complete, because inflammation alters PSA.\n3. Testosterone is best measured in the morning, between 7 and 10 AM, when it is at its highest.\n4. Bring your medication list; some drugs, such as those used for the prostate, change PSA levels.\n\n**What symptoms suggest low testosterone?**\n- Constant tiredness and less energy\n- Lower sex drive or difficulty with erections\n- Loss of muscle mass and more abdominal fat\n- Mood changes, irritability or trouble concentrating\n\n**What if my PSA is high?**\nA high PSA does not mean cancer. It can be caused by an enlarged prostate, inflammation or infection. The doctor evaluates the result based on your age and symptoms, may repeat the test in a few weeks and, if needed, refers you to a urologist.\n\n**Is there a men's checkup package?**\nYes. The clinic offers a complete men's checkup that includes a urine test, prostate exam, testosterone and medical consultation, with a fixed price listed on the promotions page.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "examen de testosterona houston"
    ],
    "keywordsEn": [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "testosterone test houston"
    ],
    "features": [
      "Antígeno prostático (PSA)",
      "Nivel de testosterona",
      "Chequeo general del hombre",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Prostate antigen (PSA)",
      "Testosterone level",
      "General men's checkup",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "title": "Análisis y Exámenes de Sangre | Laboratorio",
    "titleEn": "Blood Tests | Lab",
    "metaTitle": "Análisis de Sangre y Laboratorio Clínico en Houston | Clínica Hispana Familiar 529",
    "metaTitleEn": "Blood Tests & Clinical Lab in Houston | Clínica Hispana Familiar 529",
    "shortTitle": "Análisis de Sangre",
    "description": "Análisis de sangre en Houston, TX: biometría, química, glucosa, colesterol y más. Resultados en español, con precios accesibles.",
    "descriptionEn": "Blood tests in Houston, TX: CBC, chemistry, glucose, cholesterol and more. Results in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se toman muestras de sangre sin cita previa, en español, para chequeos generales, seguimiento de diabetes, colesterol o tiroides, y exámenes de empleo o escuela. No se necesita seguro médico y los resultados se explican en la consulta.\n\n**¿Qué análisis de sangre están disponibles?**\n- Biometría hemática completa (CBC): anemia, infecciones y defensas\n- Química sanguínea: glucosa, función del riñón y del hígado, electrolitos\n- Perfil de lípidos: colesterol total, LDL, HDL y triglicéridos\n- Hemoglobina A1c para el control de la diabetes de los últimos 3 meses\n- Pruebas de tiroides (TSH y T4)\n- Vitamina B12, vitamina D y hierro\n- PSA, testosterona y otras pruebas hormonales\n- Pruebas de embarazo, VIH y otras infecciones de transmisión sexual\n\n**¿Necesito estar en ayunas?**\nPara glucosa, perfil de lípidos y química completa se recomiendan de 8 a 12 horas de ayuno; puedes tomar agua. La biometría, la tiroides, la A1c y la mayoría de las hormonas no requieren ayuno. No suspendas tus medicamentos sin indicación médica.\n\n**¿Cómo es la toma de muestra?**\n1. Te registras en recepción e indicas el análisis que necesitas o el que te indicó el médico.\n2. La extracción se hace del brazo y dura menos de 5 minutos.\n3. Puedes comer y seguir con tus actividades normales en cuanto termines.\n4. Cuando llegan los resultados, el médico te los explica en español y, si algo sale alterado, te indica el tratamiento o el seguimiento.\n\n**¿Cuándo están listos los resultados?**\nEn la mayoría de los casos los resultados están listos el mismo día o en pocos días, según el tipo de prueba. Pregunta en tu visita cuándo estará el tuyo.\n\n**¿Cada cuánto conviene hacerse un chequeo de sangre?**\nUn adulto sano puede hacerse un panel general una vez al año. Con diabetes, la A1c se revisa cada 3 a 6 meses. Con colesterol alto o presión alta, el perfil de lípidos y la función renal se revisan al menos una vez al año o según indique el médico.\n\n**¿Hay un paquete de análisis de sangre?**\nSí. La clínica ofrece un examen general de sangre con vitaminas a precio fijo, publicado en la página de promociones.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 blood samples are drawn with no appointment needed, in Spanish, for general checkups, diabetes, cholesterol or thyroid follow-up, and work or school exams. No insurance is needed and results are explained during the visit.\n\n**Which blood tests are available?**\n- Complete blood count (CBC): anemia, infections and immune cells\n- Blood chemistry: glucose, kidney and liver function, electrolytes\n- Lipid panel: total cholesterol, LDL, HDL and triglycerides\n- Hemoglobin A1c for diabetes control over the last 3 months\n- Thyroid tests (TSH and T4)\n- Vitamin B12, vitamin D and iron\n- PSA, testosterone and other hormone tests\n- Pregnancy, HIV and other sexually transmitted infection tests\n\n**Do I need to fast?**\nFor glucose, lipid panel and full chemistry, 8 to 12 hours of fasting are recommended; water is fine. CBC, thyroid, A1c and most hormone tests do not require fasting. Do not stop your medications without medical advice.\n\n**What is the blood draw like?**\n1. You check in at the front desk and tell us which test you need or the one your doctor ordered.\n2. The sample is drawn from the arm and takes less than 5 minutes.\n3. You can eat and go on with your normal activities as soon as it is done.\n4. When the results arrive, the doctor explains them in Spanish and, if something is abnormal, tells you the treatment or follow-up.\n\n**When are results ready?**\nIn most cases results are ready the same day or within a few days, depending on the test. Ask during your visit when yours will be ready.\n\n**How often should I get blood work done?**\nA healthy adult can get a general panel once a year. With diabetes, A1c is checked every 3 to 6 months. With high cholesterol or high blood pressure, the lipid panel and kidney function are checked at least once a year or as your doctor indicates.\n\n**Is there a blood work package?**\nYes. The clinic offers a general blood test with vitamins at a fixed price, listed on the promotions page.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston"
    ],
    "keywordsEn": [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston"
    ],
    "features": [
      "Biometría y química sanguínea",
      "Glucosa, colesterol y triglicéridos",
      "Pruebas de tiroides, hígado y riñón",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "CBC and blood chemistry",
      "Glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney tests",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 11,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "title": "Examen de Orina y Tratamiento de Infecciones Urinarias",
    "titleEn": "Urinalysis & Urinary Infection Treatment",
    "metaTitle": "Infecciones Urinarias en Houston: Examen y Tratamiento | Clínica Hispana Familiar 529",
    "metaTitleEn": "Urinary Tract Infections in Houston: Testing & Treatment | Clínica Hispana Familiar 529",
    "shortTitle": "Infecciones Urinarias",
    "description": "Examen de orina y tratamiento de infecciones urinarias en Houston, TX, el mismo día. En español, con precios accesibles.",
    "descriptionEn": "Urinalysis and urinary infection treatment in Houston, TX, same day. In Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 el examen de orina se hace en la clínica y, si se confirma una infección urinaria, el tratamiento con antibiótico empieza el mismo día. Atención en español, sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el servicio?**\n- Examen general de orina (urianálisis) procesado en la clínica\n- Evaluación de los síntomas y del historial de infecciones previas\n- Diagnóstico de infección urinaria (cistitis)\n- Receta de antibiótico el mismo día cuando está indicada\n- Recomendaciones para evitar que la infección regrese\n\n**¿Cuáles son los síntomas de una infección urinaria?**\n- Ardor o dolor al orinar\n- Necesidad de orinar con frecuencia y en poca cantidad\n- Orina turbia, con mal olor o con sangre\n- Dolor o presión en la parte baja del abdomen\nCon fiebre, escalofríos, dolor en la espalda baja o vómito, la infección puede haber llegado a los riñones y requiere atención el mismo día.\n\n**¿Cómo es la visita paso a paso?**\n1. Entregas una muestra de orina en la clínica; conviene no orinar durante la hora previa.\n2. El urianálisis se procesa en minutos y muestra si hay leucocitos, nitritos o sangre.\n3. El médico revisa tus síntomas y confirma el diagnóstico.\n4. Si hay infección, sales con tu receta el mismo día. Si las infecciones se repiten, se puede enviar un urocultivo, cuyo resultado tarda de 2 a 3 días.\n\n**¿Cuánto dura el tratamiento?**\nUna infección urinaria sin complicaciones suele tratarse con antibiótico durante 3 a 7 días, según el medicamento. Los síntomas mejoran en 1 a 2 días, pero el tratamiento debe completarse. Si no mejoras en 48 horas, regresa a la clínica.\n\n**¿Cómo prevenir que vuelva?**\n- Tomar suficiente agua durante el día\n- No aguantar las ganas de orinar\n- Orinar después de las relaciones sexuales\n- Limpiarse de adelante hacia atrás\n- Evitar duchas vaginales y productos irritantes\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the urine test is processed in the clinic and, if a urinary tract infection is confirmed, antibiotic treatment starts the same day. Care in Spanish, no appointment and no insurance needed, in northwest Houston.\n\n**What does the service include?**\n- General urinalysis processed in the clinic\n- Evaluation of symptoms and history of previous infections\n- Diagnosis of urinary tract infection (cystitis)\n- Same-day antibiotic prescription when indicated\n- Recommendations to keep the infection from coming back\n\n**What are the symptoms of a urinary tract infection?**\n- Burning or pain when urinating\n- Needing to urinate often and in small amounts\n- Cloudy, foul-smelling or bloody urine\n- Pain or pressure in the lower abdomen\nWith fever, chills, lower-back pain or vomiting, the infection may have reached the kidneys and needs same-day care.\n\n**What is the visit like, step by step?**\n1. You provide a urine sample at the clinic; it helps not to urinate during the previous hour.\n2. The urinalysis is processed in minutes and shows whether there are leukocytes, nitrites or blood.\n3. The doctor reviews your symptoms and confirms the diagnosis.\n4. If there is an infection, you leave with your prescription the same day. For recurring infections, a urine culture can be sent out; results take 2 to 3 days.\n\n**How long does treatment last?**\nAn uncomplicated urinary tract infection is usually treated with antibiotics for 3 to 7 days, depending on the medication. Symptoms improve within 1 to 2 days, but the full course must be completed. If you do not improve within 48 hours, come back to the clinic.\n\n**How can I prevent it from coming back?**\n- Drink enough water during the day\n- Do not hold urine for long periods\n- Urinate after intercourse\n- Wipe from front to back\n- Avoid douching and irritating products\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston"
    ],
    "keywordsEn": [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Exámenes de heces fecales en Houston, TX. Detección de parásitos e infecciones, en español, con precios accesibles.",
    "descriptionEn": "Stool tests in Houston, TX. Detection of parasites and infections, in Spanish, with affordable pricing.",
    "longDescription": "Los problemas digestivos a veces tienen una causa que solo un análisis de heces puede revelar. En Clínica Hispana Familiar 529 realizamos exámenes de heces fecales para encontrar el origen y darte el tratamiento correcto.\n\n**¿Qué incluye?**\n- Análisis general de heces fecales\n- Detección de parásitos\n- Identificación de infecciones intestinales\n- Evaluación de sangre oculta cuando se requiere\n- Resultados explicados en español\n\n**Cuándo es útil**\nDiarrea persistente, dolor abdominal, gases, cambios en las evacuaciones o pérdida de peso sin explicación. El examen ayuda a un diagnóstico preciso.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Digestive problems sometimes have a cause that only a stool test can reveal. At Clínica Hispana Familiar 529 we perform stool tests to find the source and give you the right treatment.\n\n**What's included?**\n- General stool analysis\n- Parasite detection\n- Identification of intestinal infections\n- Occult-blood evaluation when needed\n- Results explained in Spanish\n\n**When it helps**\nPersistent diarrhea, abdominal pain, gas, changes in bowel movements or unexplained weight loss. The test helps with an accurate diagnosis.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston"
    ],
    "keywordsEn": [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston"
    ],
    "features": [
      "Análisis de heces fecales",
      "Detección de parásitos e infecciones",
      "Evaluación de síntomas digestivos",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Stool analysis",
      "Detection of parasites and infections",
      "Digestive symptom evaluation",
      "Results explained in Spanish"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "No todo dolor de garganta es igual: la faringitis por estreptococo necesita tratamiento específico. En Clínica Hispana Familiar 529 hacemos la prueba rápida de strep y te damos el resultado y el tratamiento el mismo día.\n\n**¿Qué incluye?**\n- Prueba rápida de estreptococo (hisopado de garganta)\n- Resultado en pocos minutos\n- Evaluación del dolor de garganta\n- Tratamiento adecuado si el resultado es positivo\n- Indicaciones de recuperación\n\n**Cuándo hacerla**\nDolor de garganta fuerte, fiebre, dificultad para tragar o placas blancas en las amígdalas, sobre todo en niños. La prueba evita tratamientos innecesarios.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Not every sore throat is the same: strep throat needs specific treatment. At Clínica Hispana Familiar 529 we run the rapid strep test and give you the result and treatment the same day.\n\n**What's included?**\n- Rapid strep test (throat swab)\n- Result in minutes\n- Sore-throat evaluation\n- Appropriate treatment if the result is positive\n- Recovery instructions\n\n**When to get it**\nSevere sore throat, fever, trouble swallowing or white patches on the tonsils, especially in children. The test avoids unnecessary treatments.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston"
    ],
    "keywordsEn": [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston"
    ],
    "features": [
      "Prueba rápida de estreptococo",
      "Resultado el mismo día",
      "Tratamiento si es positivo",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "Rapid strep test",
      "Same-day result",
      "Treatment if positive",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "Muchos trabajos y escuelas piden una prueba de tuberculosis al día. En Clínica Hispana Familiar 529 la aplicamos y leemos el resultado, con todo explicado en español.\n\n**¿Qué incluye?**\n- Prueba cutánea de tuberculosis (PPD)\n- Cita de lectura del resultado (48–72 horas después)\n- Documentación del resultado para tu trámite\n- Orientación si el resultado requiere seguimiento\n\n**Para qué la piden**\nEmpleos de salud, escuelas, trámites y voluntariado suelen requerir una prueba de TB vigente. Te ayudamos a cumplir el requisito sin complicaciones.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and schools require an up-to-date tuberculosis test. At Clínica Hispana Familiar 529 we administer it and read the result, with everything explained in Spanish.\n\n**What's included?**\n- Tuberculosis skin test (PPD)\n- Result-reading appointment (48–72 hours later)\n- Documentation of the result for your paperwork\n- Guidance if the result needs follow-up\n\n**Why it's required**\nHealthcare jobs, schools, paperwork and volunteering often require a current TB test. We help you meet the requirement without hassle.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston"
    ],
    "keywordsEn": [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston"
    ],
    "features": [
      "Prueba cutánea de tuberculosis (PPD)",
      "Lectura del resultado",
      "Útil para trabajo y escuela",
      "Atención en español"
    ],
    "featuresEn": [
      "Tuberculosis skin test (PPD)",
      "Result reading",
      "Useful for work and school",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "Cuidar tu salud sexual es un acto de responsabilidad. En Clínica Hispana Familiar 529 ofrecemos pruebas de enfermedades de transmisión sexual de forma confidencial y respetuosa, con tratamiento cuando es necesario.\n\n**¿Qué incluye?**\n- Evaluación de síntomas y factores de riesgo\n- Pruebas de las infecciones más comunes\n- Análisis de laboratorio\n- Tratamiento y orientación si el resultado es positivo\n- Total confidencialidad\n\n**Cuándo hacerte la prueba**\nSi tuviste contacto de riesgo, tienes síntomas o simplemente quieres estar tranquilo, hacerte la prueba es la mejor decisión. La detección temprana facilita el tratamiento.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Taking care of your sexual health is an act of responsibility. At Clínica Hispana Familiar 529 we offer confidential, respectful testing for sexually transmitted diseases, with treatment when needed.\n\n**What's included?**\n- Symptom and risk-factor assessment\n- Testing for the most common infections\n- Laboratory analysis\n- Treatment and guidance if the result is positive\n- Complete confidentiality\n\n**When to get tested**\nIf you had a risky encounter, have symptoms or simply want peace of mind, getting tested is the best decision. Early detection makes treatment easier.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston"
    ],
    "keywordsEn": [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston"
    ],
    "features": [
      "Pruebas confidenciales y sin juicios",
      "Evaluación de síntomas y riesgo",
      "Tratamiento disponible",
      "Atención en español"
    ],
    "featuresEn": [
      "Confidential, judgment-free testing",
      "Symptom and risk assessment",
      "Treatment available",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "Muchos empleos y trámites requieren una prueba de alcohol y drogas. En Clínica Hispana Familiar 529 la realizamos de forma rápida y te entregamos la documentación que necesitas.\n\n**¿Qué incluye?**\n- Prueba de detección de drogas\n- Prueba de alcohol\n- Proceso ágil y discreto\n- Documentación del resultado para tu empleador o trámite\n\n**Para trabajo y trámites**\nAtendemos solicitudes de empleo, requisitos laborales y trámites personales. Te explicamos el proceso en español para que llegues tranquilo.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Many jobs and processes require an alcohol and drug test. At Clínica Hispana Familiar 529 we perform it quickly and give you the documentation you need.\n\n**What's included?**\n- Drug screening test\n- Alcohol test\n- Quick, discreet process\n- Result documentation for your employer or paperwork\n\n**For work and paperwork**\nWe handle job applications, workplace requirements and personal paperwork. We explain the process in Spanish so you arrive with peace of mind.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston"
    ],
    "keywordsEn": [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston"
    ],
    "features": [
      "Prueba de drogas para empleo",
      "Prueba de alcohol",
      "Proceso rápido",
      "Documentación del resultado"
    ],
    "featuresEn": [
      "Drug test for employment",
      "Alcohol test",
      "Fast process",
      "Result documentation"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    "descriptionEn": "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    "longDescription": "El electrocardiograma (EKG) registra la actividad eléctrica de tu corazón en pocos minutos y sin ninguna molestia. En Clínica Hispana Familiar 529 lo realizamos como parte de chequeos y exámenes médicos.\n\n**¿Qué incluye?**\n- Estudio del ritmo y la actividad del corazón\n- Interpretación por personal médico\n- Útil para exámenes de trabajo, deporte o cirugía\n- Resultados explicados en español\n\n**Cuándo se recomienda**\nSi tienes palpitaciones, presión alta, dolor en el pecho o necesitas un examen médico completo, el EKG aporta información valiosa sobre tu corazón.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "The electrocardiogram (EKG) records your heart's electrical activity in just a few minutes with no discomfort. At Clínica Hispana Familiar 529 we perform it as part of checkups and medical exams.\n\n**What's included?**\n- Study of your heart's rhythm and activity\n- Interpretation by medical staff\n- Useful for work, sports or surgery exams\n- Results explained in Spanish\n\n**When it's recommended**\nIf you have palpitations, high blood pressure, chest discomfort or need a complete medical exam, the EKG provides valuable information about your heart.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston"
    ],
    "keywordsEn": [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish"
    ],
    "features": [
      "Estudio rápido y sin dolor",
      "Evaluación del ritmo cardiaco",
      "Útil para exámenes médicos",
      "Resultados en español"
    ],
    "featuresEn": [
      "Fast and painless test",
      "Heart-rhythm evaluation",
      "Useful for medical exams",
      "Results in Spanish"
    ],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "El ultrasonido es una herramienta segura y sin dolor que nos permite ver el interior de tu cuerpo para diagnosticar con precisión. En Clínica Hispana Familiar 529 contamos con equipo moderno y personal que te explica todo en español.\n\n**¿Qué incluye?**\n- Ultrasonido abdominal (hígado, vesícula, riñones)\n- Ultrasonido pélvico\n- Ultrasonido de embarazo (control y seguimiento)\n- Evaluación de tiroides y tejidos blandos\n\n**Sin radiación y sin dolor**\nA diferencia de los rayos X, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo. El estudio es rápido y no requiere preparación complicada.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Ultrasound is a safe, painless tool that lets us see inside your body for an accurate diagnosis. At Clínica Hispana Familiar 529 we have modern equipment and staff who explain everything in Spanish.\n\n**What's included?**\n- Abdominal ultrasound (liver, gallbladder, kidneys)\n- Pelvic ultrasound\n- Pregnancy ultrasound (monitoring and follow-up)\n- Thyroid and soft-tissue evaluation\n\n**No radiation, no pain**\nUnlike X-rays, ultrasound uses no radiation, so it's safe even during pregnancy. The study is quick and requires little preparation.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston"
    ],
    "keywordsEn": [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston"
    ],
    "features": [
      "Ultrasonido abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Equipo moderno",
      "Atención en español"
    ],
    "featuresEn": [
      "Abdominal and pelvic ultrasound",
      "Pregnancy ultrasound",
      "Modern equipment",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "title": "Examen Físico DOT - Licencia CDL",
    "titleEn": "DOT Physical Exam - CDL License",
    "metaTitle": "Examen Físico DOT en Houston para Licencia CDL | Clínica Hispana Familiar 529",
    "metaTitleEn": "DOT Physical Exam in Houston for CDL License | Clínica Hispana Familiar 529",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT en Houston, TX para licencia CDL, certificado el mismo día y en español. Con precios accesibles.",
    "descriptionEn": "DOT physical exam in Houston, TX for CDL license, same-day certificate, in Spanish. With affordable pricing.",
    "longDescription": "El examen físico DOT en Clínica Hispana Familiar 529 se realiza sin cita previa, en español, y el certificado médico se entrega el mismo día si cumples los requisitos de la FMCSA. Es el examen obligatorio para obtener o renovar la licencia comercial CDL en Texas.\n\n**¿Qué revisa el examen físico DOT?**\n- Visión: al menos 20/40 en cada ojo, con o sin lentes, y campo visual de 70 grados en cada ojo\n- Audición: escuchar un susurro a 5 pies de distancia, con o sin aparato auditivo\n- Presión arterial y pulso\n- Examen de orina para proteína, azúcar y sangre (no es una prueba de drogas)\n- Revisión física general, historial médico y medicamentos\n\n**¿Cuánto tiempo es válido el certificado DOT?**\nEl certificado médico DOT es válido hasta 24 meses. Si tienes presión alta controlada, diabetes u otra condición que requiere seguimiento, el examinador puede emitirlo por 3 meses a 1 año. Con presión arterial entre 140/90 y 159/99 el certificado se emite por 1 año.\n\n**¿Qué debo traer al examen?**\n1. Licencia de conducir vigente\n2. Lentes o aparato auditivo, si los usas\n3. Lista de medicamentos con dosis\n4. Si tienes diabetes, presión alta, problemas del corazón o apnea del sueño: registros recientes de tu médico y, en apnea, el reporte de uso del CPAP\n5. Tu certificado anterior, si lo tienes\n\n**¿Cómo es el proceso y cuánto dura?**\n1. Llenas la parte del conductor del formulario de historial médico.\n2. Se toman los signos vitales y la muestra de orina.\n3. El examinador realiza la revisión física, de visión y audición.\n4. Si cumples los requisitos, recibes el certificado en la misma visita. El proceso completo suele tomar entre 30 y 45 minutos.\n5. Entrega una copia del certificado al Departamento de Seguridad Pública de Texas (DPS) para que quede registrado en tu CDL.\n\n**¿Qué pasa si no cumplo algún requisito?**\nEl examinador puede pedir documentación adicional o emitir un certificado de menor duración en lugar de negarlo. Los casos más frecuentes son presión arterial de 160/100 o más, diabetes tratada con insulina sin el formulario MCSA-5870 y visión por debajo de 20/40 sin corrección.\n\n**¿Dónde puedo leer más?**\nEn el blog de la clínica hay una guía completa del examen DOT para camioneros en Houston, con requisitos, costos y qué esperar.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "The DOT physical exam at Clínica Hispana Familiar 529 is performed with no appointment needed, in Spanish, and the medical certificate is issued the same day if you meet FMCSA requirements. It is the exam required to obtain or renew a commercial driver's license (CDL) in Texas.\n\n**What does the DOT physical check?**\n- Vision: at least 20/40 in each eye, with or without glasses, and a 70-degree field of vision in each eye\n- Hearing: hearing a forced whisper at 5 feet, with or without a hearing aid\n- Blood pressure and pulse\n- Urine test for protein, sugar and blood (not a drug test)\n- General physical exam, medical history and medications\n\n**How long is the DOT certificate valid?**\nThe DOT medical certificate is valid for up to 24 months. If you have controlled high blood pressure, diabetes or another condition that needs follow-up, the examiner may issue it for 3 months to 1 year. With blood pressure between 140/90 and 159/99 the certificate is issued for 1 year.\n\n**What should I bring to the exam?**\n1. A valid driver's license\n2. Glasses or hearing aid, if you use them\n3. A list of your medications with doses\n4. If you have diabetes, high blood pressure, heart problems or sleep apnea: recent records from your doctor and, for apnea, your CPAP usage report\n5. Your previous certificate, if you have it\n\n**What is the process like and how long does it take?**\n1. You fill out the driver section of the medical history form.\n2. Vital signs and the urine sample are taken.\n3. The examiner performs the physical, vision and hearing checks.\n4. If you meet the requirements, you receive the certificate in the same visit. The whole process usually takes 30 to 45 minutes.\n5. Submit a copy of the certificate to the Texas Department of Public Safety (DPS) so it is recorded on your CDL.\n\n**What happens if I don't meet a requirement?**\nThe examiner may request additional documentation or issue a shorter certificate instead of denying it. The most common cases are blood pressure of 160/100 or higher, insulin-treated diabetes without form MCSA-5870, and vision below 20/40 without correction.\n\n**Where can I read more?**\nThe clinic blog has a complete guide to the DOT exam for truck drivers in Houston, with requirements, costs and what to expect.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español"
    ],
    "keywordsEn": [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston"
    ],
    "features": [
      "Certificado DOT el mismo día",
      "Para licencia CDL",
      "Proceso rápido",
      "Atención en español"
    ],
    "featuresEn": [
      "Same-day DOT certificate",
      "For CDL license",
      "Fast process",
      "Care in Spanish"
    ],
    "highlighted": true,
    "order": 20,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "title": "Examen Médico de Inmigración I-693",
    "titleEn": "Immigration Medical Exam I-693",
    "metaTitle": "Examen Médico de Inmigración I-693 en Houston | Clínica Hispana Familiar 529",
    "metaTitleEn": "I-693 Immigration Medical Exam in Houston | Clínica Hispana Familiar 529",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    "longDescription": "Clínica Hispana Familiar 529 realiza el examen médico de inmigración con un médico autorizado por USCIS (civil surgeon) en Houston. El Formulario I-693 se entrega completado y sellado en sobre oficial, listo para presentarse con la solicitud de residencia. Atención en español, sin seguro médico.\n\n**¿Quién necesita el examen I-693?**\nLo requiere quien solicita la residencia permanente (green card) dentro de Estados Unidos mediante el Formulario I-485, ajuste de estatus. También se pide en algunos casos de refugiados, asilados y ciertas visas. Quien lo tramita desde fuera del país lo hace con un médico del panel del consulado, no con un civil surgeon.\n\n**¿Qué incluye el examen médico de inmigración?**\n- Revisión del historial médico y del registro de vacunas\n- Examen físico completo\n- Prueba de tuberculosis en sangre (IGRA) para mayores de 2 años; si es positiva, radiografía de tórax\n- Prueba de sífilis en sangre entre los 18 y 44 años, y prueba de gonorrea entre los 18 y 24 años\n- Vacunas requeridas según la edad, como MMR, Tdap o Td, varicela, hepatitis B e influenza en temporada\n- Formulario I-693 completado, firmado y sellado\n\n**¿Cómo es el proceso paso a paso?**\n1. Primera visita: examen físico, extracción de sangre y revisión de vacunas.\n2. Los resultados de laboratorio tardan unos días; si la prueba de tuberculosis es positiva, se hace una radiografía de tórax.\n3. Se aplican las vacunas que falten o se documentan las que ya tienes.\n4. El médico completa y firma el Formulario I-693 y lo entrega en un sobre sellado, junto con una copia para ti.\n5. No abras el sobre: USCIS solo acepta el formulario sellado por el civil surgeon.\n\n**¿Qué debo traer?**\n- Pasaporte o identificación con foto\n- Registro de vacunas, con traducción al inglés si está en otro idioma\n- Registros médicos de condiciones crónicas o tratamientos\n- Si tuviste tuberculosis o una prueba positiva antes, los resultados y radiografías previas\n- El número de recibo de tu caso, si USCIS ya te solicitó el examen\n\n**¿Cuánto tiempo es válido el I-693?**\nUSCIS ha cambiado varias veces las reglas de vigencia del formulario. Lo más seguro es presentar el I-693 junto con la solicitud, o en cuanto USCIS lo pida, y confirmar la regla vigente en uscis.gov antes de tu cita.\n\n**¿Dónde puedo leer más?**\nEn el blog de la clínica hay una guía completa del examen médico de inmigración I-693 en Houston.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Clínica Hispana Familiar 529 performs the immigration medical exam with a USCIS-authorized physician (civil surgeon) in Houston. Form I-693 is delivered completed and sealed in the official envelope, ready to be filed with your residency application. Care in Spanish, no insurance needed.\n\n**Who needs the I-693 exam?**\nIt is required for anyone applying for permanent residence (green card) from within the United States through Form I-485, adjustment of status. It is also requested in some refugee, asylee and certain visa cases. Applicants outside the country use a consulate panel physician, not a civil surgeon.\n\n**What does the immigration medical exam include?**\n- Review of medical history and vaccination records\n- Complete physical exam\n- Tuberculosis blood test (IGRA) for ages 2 and up; if positive, a chest X-ray\n- Syphilis blood test for ages 18 to 44, and gonorrhea test for ages 18 to 24\n- Vaccines required by age, such as MMR, Tdap or Td, varicella, hepatitis B and seasonal flu\n- Form I-693 completed, signed and sealed\n\n**What is the process, step by step?**\n1. First visit: physical exam, blood draw and vaccine review.\n2. Lab results take a few days; if the tuberculosis test is positive, a chest X-ray is done.\n3. Missing vaccines are administered, or the ones you already have are documented.\n4. The doctor completes and signs Form I-693 and hands it to you in a sealed envelope, along with a copy for your records.\n5. Do not open the envelope: USCIS only accepts the form sealed by the civil surgeon.\n\n**What should I bring?**\n- Passport or photo ID\n- Vaccination records, with an English translation if they are in another language\n- Medical records for chronic conditions or treatments\n- If you had tuberculosis or a positive test before, the previous results and X-rays\n- Your case receipt number, if USCIS has already requested the exam\n\n**How long is the I-693 valid?**\nUSCIS has changed the validity rules for the form several times. The safest approach is to file the I-693 together with your application, or as soon as USCIS requests it, and confirm the current rule at uscis.gov before your visit.\n\n**Where can I read more?**\nThe clinic blog has a complete guide to the I-693 immigration medical exam in Houston.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston"
    ],
    "keywordsEn": [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston"
    ],
    "features": [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español"
    ],
    "featuresEn": [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish"
    ],
    "highlighted": false,
    "order": 21,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacunas de flu y toxoide tetánico en Houston, TX. Aplicación por personal médico en español, con precios accesibles.",
    "descriptionEn": "Flu and tetanus vaccines in Houston, TX. Administered by medical staff in Spanish, with affordable pricing.",
    "longDescription": "Las vacunas son una de las formas más sencillas de cuidar tu salud. En Clínica Hispana Familiar 529 aplicamos la vacuna contra la influenza y el toxoide tetánico de forma segura y rápida.\n\n**¿Qué incluye?**\n- Vacuna anual contra la influenza (flu)\n- Toxoide tetánico (refuerzo del tétanos)\n- Aplicación por personal médico\n- Orientación sobre cuándo aplicar refuerzos\n- Atención en español\n\n**Por qué vacunarte**\nLa vacuna de la flu reduce el riesgo de enfermarte de gravedad en temporada de gripe, y el toxoide tetánico te protege ante cortes y heridas. Pregúntanos cuál te conviene.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Vaccines are one of the simplest ways to protect your health. At Clínica Hispana Familiar 529 we administer the influenza vaccine and tetanus toxoid safely and quickly.\n\n**What's included?**\n- Annual influenza (flu) vaccine\n- Tetanus toxoid (tetanus booster)\n- Administered by medical staff\n- Guidance on when boosters are due\n- Care in Spanish\n\n**Why get vaccinated**\nThe flu vaccine lowers your risk of getting seriously ill during flu season, and the tetanus toxoid protects you from cuts and wounds. Ask us which one you need.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston"
    ],
    "keywordsEn": [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston"
    ],
    "features": [
      "Vacuna contra la influenza (flu)",
      "Toxoide tetánico",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Influenza (flu) vaccine",
      "Tetanus toxoid",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    "longDescription": "Los sueros vitaminados aportan hidratación, vitaminas y minerales directamente a tu organismo. En Clínica Hispana Familiar 529 los aplicamos con personal médico y en un ambiente cómodo y seguro.\n\n**¿Qué incluye?**\n- Evaluación breve para elegir el suero adecuado\n- Hidratación intravenosa\n- Vitaminas y minerales\n- Aplicación y monitoreo por personal médico\n- Atención en español\n\n**Cuándo pueden ayudar**\nDespués de un periodo de cansancio, deshidratación o malestar, un suero vitaminado puede ayudarte a recuperar energía. Te orientamos sobre si es adecuado para ti.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Vitamin IV drips deliver hydration, vitamins and minerals directly into your body. At Clínica Hispana Familiar 529 we administer them with medical staff in a comfortable, safe setting.\n\n**What's included?**\n- A brief evaluation to choose the right drip\n- Intravenous hydration\n- Vitamins and minerals\n- Administration and monitoring by medical staff\n- Care in Spanish\n\n**When they can help**\nAfter a period of fatigue, dehydration or feeling unwell, a vitamin drip can help you recover energy. We advise you on whether it's right for you.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston"
    ],
    "features": [
      "Hidratación intravenosa",
      "Vitaminas y minerales",
      "Aplicación por personal médico",
      "Atención en español"
    ],
    "featuresEn": [
      "Intravenous hydration",
      "Vitamins and minerals",
      "Administered by medical staff",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "Una herida que no cierra bien puede infectarse o dejar cicatriz. En Clínica Hispana Familiar 529 cerramos cortes y heridas con suturas de forma segura, sin cita y con atención en español.\n\n**¿Qué incluye?**\n- Evaluación y limpieza de la herida\n- Cierre con suturas (puntos)\n- Aplicación de anestesia local\n- Indicaciones de cuidado y signos de alarma\n- Retiro de puntos cuando corresponde\n\n**Cuándo acudir**\nCortes profundos, heridas que sangran o no cierran solas, o que tienen bordes abiertos. Atender pronto reduce el riesgo de infección y mejora la cicatrización.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "A wound that doesn't close well can get infected or leave a scar. At Clínica Hispana Familiar 529 we close cuts and wounds with sutures safely, no appointment needed and with care in Spanish.\n\n**What's included?**\n- Wound evaluation and cleaning\n- Closure with sutures (stitches)\n- Local anesthesia\n- Care instructions and warning signs\n- Suture removal when appropriate\n\n**When to come in**\nDeep cuts, wounds that bleed or won't close on their own, or that have open edges. Treating them promptly reduces the risk of infection and improves healing.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston"
    ],
    "keywordsEn": [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston"
    ],
    "features": [
      "Cierre de heridas con suturas",
      "Limpieza y desinfección",
      "Atención sin cita previa",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Wound closure with sutures",
      "Cleaning and disinfection",
      "Walk-ins welcome",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "Una buena curación evita infecciones y ayuda a que la herida sane más rápido. En Clínica Hispana Familiar 529 limpiamos, curamos y vendamos tus heridas, y te seguimos hasta que cicatricen.\n\n**¿Qué incluye?**\n- Limpieza y desinfección de la herida\n- Aplicación de apósitos y vendajes\n- Cambio periódico de vendajes\n- Vigilancia de signos de infección\n- Indicaciones de cuidado en casa\n\n**Para todo tipo de heridas**\nHeridas postoperatorias, úlceras, quemaduras leves o heridas que tardan en sanar. Te ayudamos con curaciones regulares para una mejor recuperación.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Good wound care prevents infections and helps the wound heal faster. At Clínica Hispana Familiar 529 we clean, treat and dress your wounds, and follow you until they heal.\n\n**What's included?**\n- Wound cleaning and disinfection\n- Application of dressings and bandages\n- Periodic dressing changes\n- Monitoring for signs of infection\n- Home-care instructions\n\n**For all kinds of wounds**\nPost-surgical wounds, ulcers, minor burns or wounds that are slow to heal. We help with regular dressing changes for a better recovery.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston"
    ],
    "keywordsEn": [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston"
    ],
    "features": [
      "Limpieza y desinfección",
      "Cambio de vendajes",
      "Seguimiento de la cicatrización",
      "Atención en español"
    ],
    "featuresEn": [
      "Cleaning and disinfection",
      "Dressing changes",
      "Healing follow-up",
      "Care in Spanish"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "Muchos problemas de piel y tejidos blandos se resuelven con un procedimiento sencillo. En Clínica Hispana Familiar 529 realizamos cirugías menores ambulatorias con anestesia local, en un mismo día.\n\n**¿Qué incluye?**\n- Evaluación del lunar, quiste o lesión\n- Procedimiento ambulatorio con anestesia local\n- Extracción de lunares, quistes y lipomas\n- Indicaciones claras de cuidado posterior\n- Retiro de puntos cuando corresponde\n\n**Rápido y seguro**\nLa mayoría de estos procedimientos toman poco tiempo y no requieren hospitalización. Te explicamos cada paso en español para que estés tranquilo.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Many skin and soft-tissue problems are solved with a simple procedure. At Clínica Hispana Familiar 529 we perform minor outpatient surgery with local anesthesia, in a single day.\n\n**What's included?**\n- Evaluation of the mole, cyst or lesion\n- Outpatient procedure with local anesthesia\n- Removal of moles, cysts and lipomas\n- Clear after-care instructions\n- Suture removal when appropriate\n\n**Fast and safe**\nMost of these procedures take little time and don't require hospitalization. We explain every step in Spanish so you feel at ease.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Scissors",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston"
    ],
    "keywordsEn": [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston"
    ],
    "features": [
      "Procedimientos ambulatorios",
      "Anestesia local",
      "Extracción de lunares, quistes y lipomas",
      "Cuidado posterior explicado"
    ],
    "featuresEn": [
      "Outpatient procedures",
      "Local anesthesia",
      "Removal of moles, cysts and lipomas",
      "After-care explained"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "Un absceso es una acumulación de pus que causa dolor e hinchazón y necesita drenarse. En Clínica Hispana Familiar 529 lo tratamos de forma segura para aliviar la molestia y prevenir que la infección avance.\n\n**¿Qué incluye?**\n- Evaluación del absceso o infección de piel\n- Drenaje con anestesia local\n- Limpieza y desinfección de la zona\n- Tratamiento de la infección cuando se requiere\n- Indicaciones de cuidado y seguimiento\n\n**No lo dejes pasar**\nUn bulto rojo, caliente y doloroso, a veces con fiebre, necesita atención. Drenarlo a tiempo evita complicaciones y alivia el dolor rápidamente.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "An abscess is a buildup of pus that causes pain and swelling and needs to be drained. At Clínica Hispana Familiar 529 we treat it safely to relieve the discomfort and prevent the infection from spreading.\n\n**What's included?**\n- Evaluation of the abscess or skin infection\n- Drainage with local anesthesia\n- Cleaning and disinfection of the area\n- Treatment of the infection when needed\n- Care and follow-up instructions\n\n**Don't let it go**\nA red, warm, painful lump, sometimes with fever, needs attention. Draining it in time prevents complications and relieves pain quickly.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston"
    ],
    "keywordsEn": [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston"
    ],
    "features": [
      "Drenaje del absceso",
      "Limpieza y desinfección",
      "Anestesia local",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Abscess drainage",
      "Cleaning and disinfection",
      "Local anesthesia",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "Una uña encarnada puede doler mucho e infectarse si no se trata. En Clínica Hispana Familiar 529 la atendemos con un procedimiento sencillo y anestesia local para aliviarte el mismo día.\n\n**¿Qué incluye?**\n- Evaluación de la uña y el dedo\n- Procedimiento con anestesia local\n- Extracción de la porción encarnada de la uña\n- Tratamiento de la infección si la hay\n- Indicaciones de cuidado para evitar que regrese\n\n**Cuándo acudir**\nDolor, enrojecimiento, hinchazón o pus alrededor de la uña, sobre todo del dedo gordo del pie. Atenderla pronto evita una infección mayor.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "An ingrown toenail can hurt a lot and get infected if untreated. At Clínica Hispana Familiar 529 we treat it with a simple procedure and local anesthesia to relieve you the same day.\n\n**What's included?**\n- Evaluation of the nail and toe\n- Procedure with local anesthesia\n- Removal of the ingrown portion of the nail\n- Treatment of the infection if present\n- Care instructions to prevent recurrence\n\n**When to come in**\nPain, redness, swelling or pus around the nail, especially the big toe. Treating it promptly prevents a larger infection.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston"
    ],
    "keywordsEn": [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston"
    ],
    "features": [
      "Tratamiento de la uña encarnada",
      "Anestesia local",
      "Alivio del dolor",
      "Indicaciones de cuidado posterior"
    ],
    "featuresEn": [
      "Ingrown toenail treatment",
      "Local anesthesia",
      "Pain relief",
      "After-care instructions"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    "descriptionEn": "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    "longDescription": "Al terminar tu consulta en Clínica Hispana Familiar 529 puedes recoger tus medicamentos en nuestra propia farmacia, sin tener que ir a otro lugar. Es la comodidad de resolver todo en una sola visita, con atención en español.\n\n**¿Qué incluye?**\n- Surtido de tu receta justo al terminar la consulta\n- Medicamentos de marca y genéricos\n- Medicamentos de venta libre (OTC) para gripe, dolor, alergias y más\n- Asesoría del personal sobre cómo tomar tus medicamentos\n- Resurtido de recetas\n\n**¿Por qué usar nuestra farmacia?**\nTe ahorras una segunda parada: el médico te atiende, te receta y recoges tu medicamento en el mismo lugar. Te explicamos en español la dosis, los horarios y los cuidados.\n\n**¿Por qué elegir Clínica Hispana Familiar 529?**\nSomos una clínica hispana y latina que te atiende 100% en español, sin cita previa y con precios accesibles, sin necesidad de seguro médico. Encuéntranos como tu centro médico cerca de ti en 15003 FM 529 B, Houston, TX 77095, con horario de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. Nuestro equipo trata a cada paciente con respeto, tiempo y explicaciones claras.\n\n**Formas de pago**\nNo necesitas seguro médico. Manejamos precios accesibles y transparentes, y aceptamos efectivo y tarjetas. Pregúntanos por el costo de tu servicio antes de tu visita.\n\n**Áreas que servimos**\nAtendemos a pacientes de Houston, TX y todo el noroeste de la ciudad: Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "After your visit at Clínica Hispana Familiar 529 you can pick up your medications at our own pharmacy, without going anywhere else. It's the convenience of getting everything done in a single visit, with service in Spanish.\n\n**What's included?**\n- Your prescription filled right after your visit\n- Brand-name and generic medications\n- Over-the-counter (OTC) medications for colds, pain, allergies and more\n- Staff guidance on how to take your medications\n- Prescription refills\n\n**Why use our pharmacy?**\nYou skip the second stop: the doctor sees you, writes your prescription, and you pick up your medication in the same place. We explain the dosage, schedule and precautions in Spanish.\n\n**Why choose Clínica Hispana Familiar 529?**\nWe are a Hispanic and Latino clinic that cares for you 100% in Spanish, with no appointment needed and affordable pricing, no insurance required. Find your medical center near you at 15003 FM 529 B, Houston, TX 77095, open Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM. Our team treats every patient with respect, time and clear explanations.\n\n**Payment**\nYou don't need health insurance. We offer affordable, transparent pricing and accept cash and cards. Ask us about the cost of your service before your visit.\n\n**Areas we serve**\nWe care for patients across Houston, TX and the entire northwest side of the city: Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "surtir receta houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "fill prescription houston"
    ],
    "features": [
      "Surtido de tu receta al instante",
      "Medicamentos de marca y genéricos",
      "Medicamentos de venta libre (OTC)",
      "Asesoría sobre tus medicamentos en español"
    ],
    "featuresEn": [
      "Prescriptions filled on the spot",
      "Brand-name and generic medications",
      "Over-the-counter (OTC) medications",
      "Guidance about your medications in Spanish"
    ],
    "highlighted": false,
    "order": 29
  }
];

// Promociones reales de la clínica (datos extraídos de los flyers del cliente).
// El precio vive en la imagen; aquí solo se usa como dato.
export const PROMOTIONS: Promotion[] = [
  {
    slug: "chequeo-completo-mujer",
    title: "Chequeo Completo de Mujer",
    titleEn: "Complete Women's Checkup",
    price: "$79",
    blurb:
      "Chequeo integral para la mujer que incluye examen de Papanicolaou, examen de orina, orden de mamografía y consulta ginecológica con atención profesional y personalizada.",
    blurbEn:
      "A comprehensive women's checkup that includes a Pap smear, a urine test, a mammogram order, and a gynecological consultation with professional, personalized care.",
    includes: [
      "Examen de Papanicolaou",
      "Examen de orina",
      "Orden de mamografía",
      "Consulta ginecológica",
    ],
    includesEn: [
      "Pap smear",
      "Urine test",
      "Mammogram order",
      "Gynecological consultation",
    ],
    image: "/images/promotions/chequeo-completo-mujer.webp",
    alt: "Promoción de chequeo completo de mujer por $79 con Papanicolaou, orina, orden de mamografía y consulta ginecológica en Clínica Hispana Familiar 529 Houston",
    altEn: "Complete women's checkup promotion for $79 with Pap smear, urine test, mammogram order and gynecological consultation at Clínica Hispana Familiar 529 Houston",
    highlighted: true,
    order: 1,
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    title: "Chequeo Completo de la Mujer",
    titleEn: "Complete Women's Checkup",
    price: "$179",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo de la mujer con ultrasonido pélvico, Papanicolaou, examen de orina y consulta médica gratis. Precio regular $300, ahora por solo $179.",
    blurbEn:
      "How long since your last women's health check? Complete women's checkup with pelvic ultrasound, Pap smear, urine test and a free medical consultation. Regular price $300, now only $179.",
    includes: [
      "Ultrasonido pélvico",
      "Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-mujer-ultrasonido.webp",
    alt: "Promoción de chequeo completo de la mujer por $179 con ultrasonido pélvico, Papanicolaou, examen de orina y consulta médica gratis en Clínica Hispana Familiar 529 Houston",
    altEn: "Complete women's checkup promotion for $179 with pelvic ultrasound, Pap smear, urine test and free medical consultation at Clínica Hispana Familiar 529 Houston",
    order: 2,
  },
  {
    slug: "chequeo-completo-hombres",
    title: "Chequeo Completo para Hombres",
    titleEn: "Complete Checkup for Men",
    price: "$89",
    blurb:
      "Chequeo completo para hombres que evalúa la salud urinaria, de próstata y los niveles de testosterona, con consulta médica incluida. Prevenir es vivir mejor.",
    blurbEn:
      "A complete men's checkup that evaluates urinary health, prostate health, and testosterone levels, with a medical consultation included. Prevention means living better.",
    includes: [
      "Examen de orina",
      "Examen de próstata (prevención de cáncer)",
      "Examen de testosterona",
      "Consulta médica",
    ],
    includesEn: [
      "Urine test",
      "Prostate test (cancer prevention)",
      "Testosterone test",
      "Medical consultation",
    ],
    image: "/images/promotions/chequeo-completo-hombres.webp",
    alt: "Promoción de chequeo completo para hombres por $89 con orina, próstata y testosterona en Clínica Hispana Familiar 529 Houston",
    altEn: "Complete checkup for men promotion for $89 with urine, prostate and testosterone tests at Clínica Hispana Familiar 529 Houston",
    highlighted: true,
    order: 3,
  },
  {
    slug: "examen-general-sangre-vitaminas",
    title: "Examen General de Sangre + Vitaminas",
    titleEn: "General Blood Test + Vitamins",
    price: "$99",
    blurb:
      "Evaluación completa de tu salud con examen general de sangre para detectar a tiempo, 2 dosis de vitamina para la energía y consulta médica con revisión de resultados y plan personalizado.",
    blurbEn:
      "A complete health evaluation with a general blood test for early detection, 2 vitamin doses for energy, and a medical consultation with results review and a personalized plan.",
    includes: [
      "Examen general de sangre",
      "2 dosis de vitamina para la energía",
      "Consulta médica con revisión de resultados",
      "Plan personalizado",
    ],
    includesEn: [
      "General blood test",
      "2 vitamin doses for energy",
      "Medical consultation with results review",
      "Personalized plan",
    ],
    image: "/images/promotions/examen-general-sangre-vitaminas.webp",
    alt: "Promoción de examen general de sangre más vitaminas por $99 con consulta médica en Clínica Hispana Familiar 529 Houston",
    altEn: "General blood test plus vitamins promotion for $99 with medical consultation at Clínica Hispana Familiar 529 Houston",
    highlighted: true,
    order: 4,
  },
  {
    slug: "chequeo-general-completo",
    title: "Chequeo General Completo",
    titleEn: "Complete General Checkup",
    price: "$99",
    blurb:
      "Chequeo general completo con valor regular de $250, ahora por solo $99 y con consulta médica gratis. Incluye examen general de sangre, A1C y examen general de orina. Cuídate hoy, vive mejor mañana.",
    blurbEn:
      "A complete general checkup with a regular value of $250, now for only $99 with a free medical consultation. Includes a general blood test, A1C, and a general urine test. Take care today, live better tomorrow.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood test",
      "A1C (glycated hemoglobin)",
      "General urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-general-completo.webp",
    alt: "Promoción de chequeo general completo por $99 con examen de sangre, A1C, orina y consulta médica gratis en Clínica Hispana Familiar 529 Houston",
    altEn: "Complete general checkup promotion for $99 with blood test, A1C, urine test and free medical consultation at Clínica Hispana Familiar 529 Houston",
    highlighted: true,
    order: 5,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.services", href: "/services" },
  // El enlace de promociones solo aparece cuando hay promos cargadas.
  ...(PROMOTIONS.length > 0 ? [{ label: "nav.promotions", href: "/promociones" }] : []),
  // La sección de enfermedades crónicas sigue en la home; solo se quitó del menú.
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contacto" },
];

