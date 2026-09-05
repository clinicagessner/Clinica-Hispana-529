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
    "longDescription": "En Clínica Hispana Familiar 529 el control de diabetes, hipertensión y colesterol incluye análisis de laboratorio, ajuste de medicamentos y seguimiento periódico, en español y sin seguro médico, en el noroeste de Houston. Sin cita previa, de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM.\n\n**¿Qué incluye el control de enfermedades crónicas?**\n- Evaluación inicial con historial, presión arterial, peso e índice de masa corporal\n- Análisis de laboratorio: glucosa, hemoglobina A1c, perfil de lípidos, función renal y hepática\n- Diagnóstico y clasificación de diabetes tipo 2, hipertensión y dislipidemia\n- Inicio o ajuste de medicamentos según los resultados\n- Plan de alimentación y actividad física explicado en español\n- Citas de seguimiento para revisar la evolución\n\n**¿Cuáles son las metas de control?**\n- Diabetes: hemoglobina A1c por debajo de 7% para la mayoría de los adultos, y glucosa en ayunas entre 80 y 130 mg/dL\n- Presión arterial: por debajo de 130/80 mmHg\n- Colesterol LDL: por debajo de 100 mg/dL, o de 70 si ya hubo un problema cardiaco\n- Triglicéridos: por debajo de 150 mg/dL\nEl médico ajusta estas metas según tu edad y otras condiciones.\n\n**¿Cada cuánto debo hacer seguimiento?**\n1. Al iniciar o cambiar un medicamento, la revisión se hace en 4 a 6 semanas.\n2. Con la condición controlada, la consulta se repite cada 3 a 6 meses.\n3. La hemoglobina A1c se mide cada 3 meses hasta alcanzar la meta y luego cada 6 meses.\n4. El perfil de lípidos y la función renal se revisan al menos una vez al año.\n5. Con diabetes, se recomienda revisión de los pies en cada visita y examen de la vista una vez al año.\n\n**¿Qué debo traer a la consulta?**\n- Lista de medicamentos con dosis, o los frascos\n- Registro de glucosa o de presión arterial si los mides en casa\n- Resultados de laboratorio anteriores\n- Ayuno de 8 a 12 horas si te van a tomar glucosa y colesterol\n\n**¿Cuáles son las señales de alarma?**\nGlucosa por encima de 300 mg/dL o por debajo de 70 con temblor y sudoración, presión de 180/120 o más, dolor en el pecho, dificultad para respirar, visión borrosa repentina o heridas en los pies que no sanan requieren atención el mismo día.\n\n**¿Hay un paquete de chequeo general?**\nSí. La clínica ofrece un chequeo general completo y un examen general de sangre con vitaminas a precio fijo, publicados en la página de promociones. El blog tiene además una guía de control de la diabetes para pacientes.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529, diabetes, hypertension and cholesterol management includes lab work, medication adjustment and regular follow-up, in Spanish and without insurance, in northwest Houston. Walk-ins Monday through Saturday 9 AM to 9 PM and Sunday 9 AM to 5 PM.\n\n**What does chronic condition management include?**\n- Initial evaluation with history, blood pressure, weight and body mass index\n- Lab work: glucose, hemoglobin A1c, lipid panel, kidney and liver function\n- Diagnosis and classification of type 2 diabetes, hypertension and dyslipidemia\n- Starting or adjusting medications based on results\n- Nutrition and physical activity plan explained in Spanish\n- Follow-up visits to review progress\n\n**What are the control targets?**\n- Diabetes: hemoglobin A1c below 7% for most adults, and fasting glucose between 80 and 130 mg/dL\n- Blood pressure: below 130/80 mmHg\n- LDL cholesterol: below 100 mg/dL, or 70 if you already had a heart problem\n- Triglycerides: below 150 mg/dL\nYour doctor adjusts these targets based on your age and other conditions.\n\n**How often should I follow up?**\n1. When starting or changing a medication, the review is done in 4 to 6 weeks.\n2. Once the condition is controlled, visits repeat every 3 to 6 months.\n3. Hemoglobin A1c is measured every 3 months until the target is reached, then every 6 months.\n4. Lipid panel and kidney function are checked at least once a year.\n5. With diabetes, a foot check at each visit and an eye exam once a year are recommended.\n\n**What should I bring to the visit?**\n- Medication list with doses, or the bottles\n- Home glucose or blood pressure log if you measure them\n- Previous lab results\n- 8 to 12 hours of fasting if glucose and cholesterol will be drawn\n\n**What are the warning signs?**\nGlucose above 300 mg/dL or below 70 with shaking and sweating, blood pressure of 180/120 or higher, chest pain, shortness of breath, sudden blurred vision or foot wounds that do not heal need same-day care.\n\n**Is there a general checkup package?**\nYes. The clinic offers a complete general checkup and a general blood test with vitamins at a fixed price, listed on the promotions page. The blog also has a diabetes management guide for patients.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 1,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Exámenes y tratamiento de la tiroides en Houston, TX. Pruebas de laboratorio y control en español, con precios accesibles.",
    "descriptionEn": "Thyroid testing and treatment in Houston, TX. Lab tests and follow-up in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se evalúa la tiroides con análisis de sangre (TSH, T3 y T4) y se inicia o ajusta el tratamiento del hipotiroidismo o hipertiroidismo, en español y sin seguro médico, en el noroeste de Houston. Sin cita previa.\n\n**¿Qué incluye el servicio de tiroides?**\n- Evaluación de síntomas y revisión del cuello\n- Pruebas de función tiroidea: TSH, T4 libre y T3\n- Diagnóstico de hipotiroidismo o hipertiroidismo\n- Inicio del tratamiento y ajuste de la dosis\n- Ultrasonido de tiroides en la clínica cuando se necesita ver nódulos\n- Seguimiento periódico con nuevos análisis\n\n**¿Cuáles son los síntomas de un problema de tiroides?**\n- Hipotiroidismo (tiroides lenta): cansancio, aumento de peso, frío, piel seca, caída del cabello, estreñimiento, tristeza\n- Hipertiroidismo (tiroides acelerada): nerviosismo, palpitaciones, pérdida de peso, calor y sudoración, temblor, insomnio\n- En ambos casos: cambios en la menstruación y dificultad para concentrarse\n\n**¿Cómo se interpreta la prueba de TSH?**\nEl rango normal de TSH es de aproximadamente 0.4 a 4.0 mIU/L. Un valor alto indica que la tiroides trabaja poco (hipotiroidismo) y un valor bajo indica que trabaja de más (hipertiroidismo). La T4 libre confirma el diagnóstico. La prueba no requiere ayuno.\n\n**¿Cómo es el tratamiento?**\n1. El hipotiroidismo se trata con levotiroxina, una pastilla diaria que se toma en ayunas, 30 a 60 minutos antes del desayuno.\n2. La TSH se repite 6 a 8 semanas después de iniciar o cambiar la dosis.\n3. Cuando el nivel es estable, el control se hace cada 6 a 12 meses.\n4. El hipertiroidismo se trata con medicamentos antitiroideos y, si se requiere, referencia a endocrinología.\n\n**¿Qué debo saber sobre la levotiroxina?**\nNo la tomes junto con calcio, hierro o antiácidos; sepáralos al menos 4 horas. Durante el embarazo la dosis suele aumentar, así que avisa al médico en cuanto lo sepas. No suspendas el tratamiento aunque te sientas bien.\n\n**¿Cuándo necesito atención urgente?**\nPalpitaciones muy rápidas con fiebre y confusión, o somnolencia extrema con temperatura baja, son emergencias tiroideas poco frecuentes que requieren ir a urgencias.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the thyroid is evaluated with blood tests (TSH, T3 and T4) and treatment for hypothyroidism or hyperthyroidism is started or adjusted, in Spanish and without insurance, in northwest Houston. No appointment needed.\n\n**What does the thyroid service include?**\n- Symptom evaluation and neck exam\n- Thyroid function tests: TSH, free T4 and T3\n- Diagnosis of hypothyroidism or hyperthyroidism\n- Treatment start and dose adjustment\n- In-clinic thyroid ultrasound when nodules need to be seen\n- Regular follow-up with repeat labs\n\n**What are the symptoms of a thyroid problem?**\n- Hypothyroidism (slow thyroid): fatigue, weight gain, feeling cold, dry skin, hair loss, constipation, low mood\n- Hyperthyroidism (overactive thyroid): nervousness, palpitations, weight loss, heat and sweating, tremor, insomnia\n- In both: menstrual changes and trouble concentrating\n\n**How is the TSH test interpreted?**\nThe normal TSH range is roughly 0.4 to 4.0 mIU/L. A high value means the thyroid is underactive (hypothyroidism) and a low value means it is overactive (hyperthyroidism). Free T4 confirms the diagnosis. No fasting is required.\n\n**What is the treatment like?**\n1. Hypothyroidism is treated with levothyroxine, a daily pill taken on an empty stomach, 30 to 60 minutes before breakfast.\n2. TSH is repeated 6 to 8 weeks after starting or changing the dose.\n3. Once the level is stable, follow-up is every 6 to 12 months.\n4. Hyperthyroidism is treated with antithyroid medication and, if needed, an endocrinology referral.\n\n**What should I know about levothyroxine?**\nDo not take it with calcium, iron or antacids; separate them by at least 4 hours. During pregnancy the dose usually goes up, so tell the doctor as soon as you know. Do not stop treatment even if you feel well.\n\n**When do I need urgent care?**\nVery fast palpitations with fever and confusion, or extreme drowsiness with low body temperature, are rare thyroid emergencies that require the emergency room.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 2,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Exámenes y tratamiento de alergias en Houston, TX. Diagnóstico y manejo en español, con precios accesibles.",
    "descriptionEn": "Allergy testing and treatment in Houston, TX. Diagnosis and management in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se evalúan y tratan las alergias respiratorias y de la piel, con consulta en español, sin cita previa y sin seguro médico, en el noroeste de Houston. El tratamiento se inicia el mismo día y la receta se puede surtir en la farmacia de la clínica.\n\n**¿Qué incluye la consulta de alergias?**\n- Evaluación de síntomas, época del año en que aparecen y posibles desencadenantes\n- Revisión de nariz, garganta, oídos, pulmones y piel\n- Tratamiento de rinitis alérgica: antihistamínicos, aerosoles nasales y gotas para los ojos\n- Tratamiento de urticaria (ronchas), eczema y dermatitis por contacto\n- Plan para reducir la exposición a lo que causa la alergia\n- Referencia al alergólogo cuando se requieren pruebas cutáneas o inmunoterapia\n\n**¿Cuáles son las alergias más comunes en Houston?**\n- Polen de roble y otros árboles, de febrero a mayo\n- Pasto, de abril a octubre\n- Ambrosía (ragweed), de agosto a noviembre\n- Cedro de montaña, de diciembre a febrero\n- Moho, ácaros del polvo y caspa de mascotas, durante todo el año, favorecidos por la humedad\n\n**¿Cómo distingo una alergia de un resfriado?**\nLa alergia produce estornudos en serie, comezón en nariz, ojos y garganta, moco claro y ojos llorosos, sin fiebre, y dura mientras dure la exposición. El resfriado suele traer malestar general, a veces fiebre, moco que se vuelve espeso y se resuelve en 7 a 10 días.\n\n**¿Cómo es el tratamiento paso a paso?**\n1. Se identifica el patrón de los síntomas y los posibles desencadenantes.\n2. Se indica un antihistamínico de segunda generación, que no da sueño, y un aerosol nasal de esteroide si hay congestión.\n3. Para la piel, se indican cremas y, en urticaria, antihistamínicos por varios días.\n4. Se revisa la respuesta en 2 a 4 semanas y se ajusta el tratamiento.\n\n**¿Cómo reduzco la exposición en casa?**\n- Mantén las ventanas cerradas en temporada de polen y usa el aire acondicionado con filtro\n- Báñate y cambia de ropa al llegar de la calle en días de polen alto\n- Lava la ropa de cama con agua caliente cada semana\n- Controla la humedad para evitar el moho\n\n**¿Cuándo es una emergencia?**\nHinchazón de labios, lengua o garganta, dificultad para respirar, mareo o ronchas que se extienden rápido tras comer, una picadura o un medicamento pueden ser anafilaxia. Llama al 911 de inmediato.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 respiratory and skin allergies are evaluated and treated, with visits in Spanish, no appointment and no insurance needed, in northwest Houston. Treatment starts the same day and the prescription can be filled at the clinic pharmacy.\n\n**What does the allergy visit include?**\n- Evaluation of symptoms, time of year they appear and possible triggers\n- Exam of nose, throat, ears, lungs and skin\n- Treatment of allergic rhinitis: antihistamines, nasal sprays and eye drops\n- Treatment of hives, eczema and contact dermatitis\n- A plan to reduce exposure to what causes the allergy\n- Allergist referral when skin testing or immunotherapy is needed\n\n**What are the most common allergies in Houston?**\n- Oak and other tree pollen, February to May\n- Grass, April to October\n- Ragweed, August to November\n- Mountain cedar, December to February\n- Mold, dust mites and pet dander year-round, made worse by humidity\n\n**How do I tell an allergy from a cold?**\nAn allergy causes sneezing fits, itchy nose, eyes and throat, clear mucus and watery eyes, without fever, and lasts as long as the exposure. A cold usually brings general malaise, sometimes fever, mucus that thickens, and clears in 7 to 10 days.\n\n**What is the treatment, step by step?**\n1. The symptom pattern and possible triggers are identified.\n2. A second-generation antihistamine that does not cause drowsiness is prescribed, plus a steroid nasal spray if there is congestion.\n3. For the skin, creams are prescribed and, for hives, antihistamines for several days.\n4. Response is reviewed in 2 to 4 weeks and treatment is adjusted.\n\n**How do I reduce exposure at home?**\n- Keep windows closed during pollen season and use air conditioning with a filter\n- Shower and change clothes when you get home on high-pollen days\n- Wash bedding in hot water every week\n- Control humidity to prevent mold\n\n**When is it an emergency?**\nSwelling of the lips, tongue or throat, trouble breathing, dizziness or hives that spread quickly after food, a sting or a medication may be anaphylaxis. Call 911 immediately.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 3,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Pruebas de flu y COVID y tratamiento de enfermedades respiratorias en Houston, TX. Sin cita previa, en español.",
    "descriptionEn": "Flu and COVID testing and respiratory illness treatment in Houston, TX. Walk-ins welcome, in Spanish.",
    "longDescription": "En Clínica Hispana Familiar 529 se hacen pruebas rápidas de influenza y COVID-19 con resultado en unos 15 minutos y se trata la gripe, la tos, la bronquitis y las infecciones de garganta el mismo día, en español, sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el servicio?**\n- Prueba rápida de influenza A y B con hisopado nasal\n- Prueba rápida de antígeno de COVID-19\n- Prueba rápida de estreptococo cuando el dolor de garganta lo indica\n- Revisión de oídos, garganta y pulmones, y medición de oxígeno\n- Tratamiento de gripe, tos, bronquitis, sinusitis e infecciones de garganta\n- Receta surtida en la farmacia de la clínica\n\n**¿Cuándo debo hacerme la prueba?**\nLa prueba de influenza es más precisa en los primeros 3 a 4 días de síntomas. La de COVID-19 se recomienda desde el primer día con síntomas o 5 días después de un contacto cercano. Si la prueba de COVID sale negativa pero los síntomas siguen, se repite a las 48 horas.\n\n**¿Cómo es la visita paso a paso?**\n1. Se registran los síntomas, la fecha de inicio y los contactos con enfermos.\n2. Se toman signos vitales, temperatura y saturación de oxígeno.\n3. Se realiza el hisopado nasal; el resultado está en unos 15 minutos.\n4. El médico indica el tratamiento y las medidas de aislamiento.\n\n**¿Existe tratamiento específico?**\n- Influenza: los antivirales funcionan mejor si se inician en las primeras 48 horas de síntomas y acortan la enfermedad alrededor de un día.\n- COVID-19: hay tratamiento antiviral para personas con factores de riesgo si se inicia en los primeros 5 días.\n- Resfriado y bronquitis viral: tratamiento de los síntomas; los antibióticos solo se indican cuando hay infección bacteriana.\n\n**¿Cuánto tiempo soy contagioso?**\nLa influenza se contagia desde un día antes de los síntomas hasta 5 a 7 días después. Con COVID-19 se recomienda quedarse en casa hasta estar 24 horas sin fiebre y con mejoría, y usar cubrebocas 5 días más.\n\n**¿Cuándo debo ir a urgencias?**\nDificultad para respirar, dolor en el pecho, labios azulados, confusión, fiebre que no baja con medicamento o saturación de oxígeno por debajo de 92% requieren atención de emergencia. En bebés, menores de 3 meses con fiebre deben ir a urgencias.\n\n**¿Cómo prevenir la gripe?**\nLa vacuna anual contra la influenza está disponible en la clínica, idealmente entre septiembre y octubre.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 rapid flu and COVID-19 tests give results in about 15 minutes, and flu, cough, bronchitis and throat infections are treated the same day, in Spanish, with no appointment and no insurance needed, in northwest Houston.\n\n**What does the service include?**\n- Rapid influenza A and B test with a nasal swab\n- Rapid COVID-19 antigen test\n- Rapid strep test when the sore throat calls for it\n- Ear, throat and lung exam, and oxygen measurement\n- Treatment of flu, cough, bronchitis, sinusitis and throat infections\n- Prescription filled at the clinic pharmacy\n\n**When should I get tested?**\nThe flu test is most accurate in the first 3 to 4 days of symptoms. The COVID-19 test is recommended from the first day of symptoms or 5 days after close contact. If the COVID test is negative but symptoms continue, it is repeated after 48 hours.\n\n**What is the visit like, step by step?**\n1. Symptoms, start date and contact with sick people are recorded.\n2. Vital signs, temperature and oxygen saturation are taken.\n3. The nasal swab is done; the result is ready in about 15 minutes.\n4. The doctor prescribes treatment and isolation measures.\n\n**Is there a specific treatment?**\n- Flu: antivirals work best when started within the first 48 hours of symptoms and shorten the illness by about a day.\n- COVID-19: antiviral treatment is available for people with risk factors if started within the first 5 days.\n- Colds and viral bronchitis: symptom treatment; antibiotics are only prescribed when there is a bacterial infection.\n\n**How long am I contagious?**\nFlu spreads from one day before symptoms until 5 to 7 days after. With COVID-19, stay home until you have been fever-free for 24 hours and improving, then wear a mask for 5 more days.\n\n**When should I go to the ER?**\nTrouble breathing, chest pain, bluish lips, confusion, fever that does not come down with medication, or oxygen saturation below 92% need emergency care. Babies under 3 months with a fever should go to the ER.\n\n**How can I prevent the flu?**\nThe annual flu vaccine is available at the clinic, ideally between September and October.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 4,
    "updatedAt": "2026-09-05"
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
    "longDescription": "En Clínica Hispana Familiar 529 el examen físico escolar y deportivo se realiza sin cita previa, en español, con el formulario de la escuela o de la liga completado y firmado en la misma visita. Sin seguro médico, en el noroeste de Houston, de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM.\n\n**¿Qué incluye el examen físico escolar y deportivo?**\n- Historial médico y familiar, con énfasis en problemas del corazón, asma, lesiones y alergias\n- Peso, talla, índice de masa corporal y presión arterial\n- Revisión de visión y audición\n- Examen de corazón, pulmones, abdomen, columna y articulaciones\n- Llenado y firma del formulario requerido por la escuela, el distrito o la liga\n- Recomendaciones de salud y referencia si se detecta algo que requiere estudio\n\n**¿Cuándo se necesita?**\n- Deportes escolares en Texas: el formulario de evaluación previa a la participación de la UIL se exige cada año para estudiantes de secundaria y preparatoria, antes de la primera práctica\n- Ligas deportivas, campamentos de verano y guarderías, según sus propios formularios\n- Inscripción escolar cuando el distrito pide un examen físico reciente\nEl examen suele tener validez de un año, aunque cada institución fija su plazo.\n\n**¿Qué debo traer?**\n1. El formulario de la escuela o liga, con la sección de historial médico ya llenada y firmada por el padre o tutor\n2. Cartilla o registro de vacunas\n3. Lentes o aparato auditivo, si el estudiante los usa\n4. Lista de medicamentos y de condiciones conocidas, como asma o alergias\n5. Un padre o tutor debe acompañar a los menores de 18 años\n\n**¿Cómo es la visita?**\nLa evaluación es breve: se revisa el historial, se toman las medidas, se examina al estudiante y se completa el formulario. Si todo está en orden, el documento se entrega firmado antes de salir.\n\n**¿Qué pasa si se detecta algo?**\nUn soplo cardiaco, presión alta, asma no controlada o una lesión previa pueden requerir estudios adicionales, como un electrocardiograma que se realiza en la clínica, antes de autorizar la práctica deportiva. Es una medida de seguridad, no una descalificación automática.\n\n**¿Se aplican las vacunas que faltan?**\nLa clínica aplica vacunas de influenza y tétanos (Tdap). Para el esquema escolar completo, revisa el registro con el médico y te indicamos dónde completar las que falten.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the school and sports physical is done with no appointment needed, in Spanish, with the school or league form completed and signed in the same visit. No insurance needed, in northwest Houston, Monday through Saturday 9 AM to 9 PM and Sunday 9 AM to 5 PM.\n\n**What does the school and sports physical include?**\n- Medical and family history, focused on heart problems, asthma, injuries and allergies\n- Weight, height, body mass index and blood pressure\n- Vision and hearing screening\n- Exam of heart, lungs, abdomen, spine and joints\n- Completion and signature of the form required by the school, district or league\n- Health recommendations and referral if something needs further study\n\n**When is it needed?**\n- School sports in Texas: the UIL pre-participation evaluation form is required every year for middle and high school students, before the first practice\n- Sports leagues, summer camps and daycare, according to their own forms\n- School enrollment when the district asks for a recent physical\nThe exam is usually valid for one year, although each institution sets its own deadline.\n\n**What should I bring?**\n1. The school or league form, with the medical history section already filled out and signed by the parent or guardian\n2. Vaccination card or record\n3. Glasses or hearing aid, if the student uses them\n4. List of medications and known conditions, such as asthma or allergies\n5. A parent or guardian must accompany anyone under 18\n\n**What is the visit like?**\nThe evaluation is brief: the history is reviewed, measurements are taken, the student is examined and the form is completed. If everything is in order, the signed document is handed over before you leave.\n\n**What happens if something is found?**\nA heart murmur, high blood pressure, uncontrolled asthma or a previous injury may require additional tests, such as an electrocardiogram done at the clinic, before sports clearance. It is a safety measure, not an automatic disqualification.\n\n**Do you give missing vaccines?**\nThe clinic administers flu and tetanus (Tdap) vaccines. For the full school schedule, review the record with the doctor and we will tell you where to complete any that are missing.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 5,
    "updatedAt": "2026-09-05"
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
    "longDescription": "En Clínica Hispana Familiar 529 la prueba de embarazo se realiza en orina o en sangre, con confirmación médica y orientación sobre los siguientes pasos, en español, sin cita previa y sin seguro médico, en el noroeste de Houston. La clínica también cuenta con ultrasonido para confirmar el embarazo.\n\n**¿Qué incluye el servicio?**\n- Prueba de embarazo en orina con resultado en minutos\n- Prueba de embarazo en sangre (hCG cuantitativa) cuando se necesita mayor precisión o detectar el embarazo más temprano\n- Confirmación médica del resultado y cálculo de la fecha probable de parto\n- Ultrasonido de embarazo en la clínica para confirmar y fechar la gestación\n- Orientación sobre control prenatal, vitaminas y referencias\n- Atención privada y sin juicios\n\n**¿Cuándo puedo hacerme la prueba?**\nLa prueba de orina es confiable desde el primer día de retraso menstrual, unos 14 días después de la relación. La prueba de sangre detecta la hormona hCG desde 6 a 8 días después de la ovulación, antes de que falte la regla. Si el resultado es negativo pero la menstruación no llega, se repite en una semana.\n\n**¿Cómo es la visita paso a paso?**\n1. Indicas la fecha de tu última menstruación y tus síntomas.\n2. Entregas una muestra de orina; la primera de la mañana es la más concentrada, aunque cualquier hora sirve.\n3. El resultado está en unos minutos. Si se requiere, se toma la prueba de sangre.\n4. El médico confirma el resultado, calcula las semanas y te explica los siguientes pasos.\n\n**¿Qué sigue si el resultado es positivo?**\n- Iniciar ácido fólico de 400 a 800 microgramos al día, o una vitamina prenatal\n- Programar la primera consulta prenatal antes de las 10 semanas\n- Ultrasonido entre las semanas 6 y 9 para confirmar el latido y la fecha\n- Evitar alcohol, tabaco y medicamentos no indicados por el médico\n- Revisar vacunas, análisis de sangre y grupo sanguíneo\n\n**¿Cuáles son los primeros síntomas de embarazo?**\nRetraso menstrual, náusea, sensibilidad en los senos, cansancio, orinar con más frecuencia y cambios en el olfato. Ninguno confirma por sí solo el embarazo; la prueba sí.\n\n**¿Cuándo debo acudir de inmediato?**\nDolor abdominal fuerte de un solo lado, sangrado abundante o mareo con prueba positiva pueden indicar un embarazo ectópico o una pérdida y requieren atención urgente.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the pregnancy test is done in urine or blood, with medical confirmation and guidance on next steps, in Spanish, with no appointment and no insurance needed, in northwest Houston. The clinic also has ultrasound to confirm the pregnancy.\n\n**What does the service include?**\n- Urine pregnancy test with results in minutes\n- Blood pregnancy test (quantitative hCG) when more precision or earlier detection is needed\n- Medical confirmation of the result and estimated due date\n- In-clinic pregnancy ultrasound to confirm and date the pregnancy\n- Guidance on prenatal care, vitamins and referrals\n- Private, judgment-free care\n\n**When can I take the test?**\nThe urine test is reliable from the first day of a missed period, about 14 days after intercourse. The blood test detects the hCG hormone from 6 to 8 days after ovulation, before a missed period. If the result is negative but your period does not come, it is repeated in a week.\n\n**What is the visit like, step by step?**\n1. You give the date of your last period and your symptoms.\n2. You provide a urine sample; the first of the morning is the most concentrated, although any time works.\n3. The result is ready in minutes. If needed, the blood test is drawn.\n4. The doctor confirms the result, calculates the weeks and explains the next steps.\n\n**What comes next if the result is positive?**\n- Start folic acid, 400 to 800 micrograms a day, or a prenatal vitamin\n- Schedule the first prenatal visit before 10 weeks\n- Ultrasound between weeks 6 and 9 to confirm the heartbeat and the date\n- Avoid alcohol, tobacco and medications not approved by your doctor\n- Review vaccines, blood work and blood type\n\n**What are the first symptoms of pregnancy?**\nMissed period, nausea, breast tenderness, fatigue, urinating more often and changes in smell. None confirms pregnancy on its own; the test does.\n\n**When should I come in right away?**\nSevere one-sided abdominal pain, heavy bleeding or dizziness with a positive test may indicate an ectopic pregnancy or a loss and need urgent care.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 7,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Tratamientos anticonceptivos en Houston, TX: orientación, pastillas e inyección. En español, con precios accesibles.",
    "descriptionEn": "Contraceptive methods in Houston, TX: guidance, pills and injection. In Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 la consulta de anticonceptivos incluye orientación sobre los métodos, receta de pastillas anticonceptivas y aplicación de la inyección, en español, sin cita previa y sin seguro médico, en el noroeste de Houston. La receta se puede surtir en la farmacia de la clínica.\n\n**¿Qué incluye la consulta?**\n- Revisión de tu historial, presión arterial y hábitos como el tabaquismo\n- Explicación de los métodos disponibles, su eficacia y sus efectos secundarios\n- Receta de pastillas anticonceptivas combinadas o solo de progestina\n- Aplicación de la inyección anticonceptiva trimestral\n- Seguimiento a los 3 meses y resolución de dudas\n- Prueba de embarazo previa cuando se requiere\n\n**¿Qué métodos ofrece la clínica?**\n- Pastillas anticonceptivas: se toman todos los días a la misma hora; con uso correcto tienen una eficacia mayor al 99%, y en uso típico alrededor del 93%\n- Inyección anticonceptiva: se aplica cada 12 a 13 semanas; eficacia mayor al 99% con aplicación puntual\n- Retiro de implante subdérmico, para quien desea cambiar de método\n- Orientación y referencia para implante, dispositivo intrauterino o métodos permanentes\n\n**¿Cómo empiezo el método paso a paso?**\n1. En la consulta se revisan tus antecedentes y se descarta un embarazo actual.\n2. Se elige el método según tu salud, tus planes y tu comodidad.\n3. Si se inicia en los primeros 5 días de la menstruación, la protección es inmediata; si se inicia en otro momento, se usa condón durante 7 días.\n4. Se programa la revisión a los 3 meses, o antes si hay efectos secundarios.\n\n**¿Qué efectos secundarios son normales?**\nSangrado irregular en los primeros 2 a 3 meses, sensibilidad en los senos, náusea leve o cambios de ánimo. Suelen desaparecer con el uso. La inyección puede causar ausencia de menstruación, que no es dañina.\n\n**¿Qué pasa si olvido una pastilla?**\nTómala en cuanto lo recuerdes y sigue con la siguiente a la hora habitual, aunque tomes dos el mismo día. Si olvidas dos o más, usa condón durante 7 días y consulta si necesitas anticoncepción de emergencia.\n\n**¿Cuándo no se recomiendan las pastillas combinadas?**\nSi fumas y tienes más de 35 años, tienes presión alta no controlada, migraña con aura, antecedentes de trombosis o estás en las primeras 6 semanas después del parto. En esos casos hay alternativas como la inyección o las pastillas solo de progestina.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the contraception visit includes guidance on methods, a prescription for birth control pills and administration of the injection, in Spanish, with no appointment and no insurance needed, in northwest Houston. The prescription can be filled at the clinic pharmacy.\n\n**What does the visit include?**\n- Review of your history, blood pressure and habits such as smoking\n- Explanation of available methods, their effectiveness and side effects\n- Prescription for combined or progestin-only birth control pills\n- Administration of the quarterly contraceptive injection\n- Follow-up at 3 months and answers to your questions\n- Pregnancy test beforehand when needed\n\n**Which methods does the clinic offer?**\n- Birth control pills: taken every day at the same time; with perfect use they are over 99% effective, and about 93% with typical use\n- Contraceptive injection: given every 12 to 13 weeks; over 99% effective when given on time\n- Subdermal implant removal, for those who want to switch methods\n- Guidance and referral for implant, intrauterine device or permanent methods\n\n**How do I start the method, step by step?**\n1. At the visit your history is reviewed and a current pregnancy is ruled out.\n2. The method is chosen based on your health, your plans and your comfort.\n3. If started within the first 5 days of your period, protection is immediate; if started at another time, use condoms for 7 days.\n4. A follow-up is scheduled at 3 months, or sooner if there are side effects.\n\n**Which side effects are normal?**\nIrregular bleeding during the first 2 to 3 months, breast tenderness, mild nausea or mood changes. They usually go away with use. The injection can stop your period, which is not harmful.\n\n**What if I miss a pill?**\nTake it as soon as you remember and continue with the next one at the usual time, even if you take two the same day. If you miss two or more, use condoms for 7 days and ask whether you need emergency contraception.\n\n**When are combined pills not recommended?**\nIf you smoke and are over 35, have uncontrolled high blood pressure, migraine with aura, a history of blood clots, or are in the first 6 weeks after giving birth. In those cases there are alternatives such as the injection or progestin-only pills.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 8,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Extracción de implantes subdérmicos en Houston, TX, procedimiento seguro y en español. Con precios accesibles.",
    "descriptionEn": "Subdermal implant removal in Houston, TX, a safe procedure in Spanish. With affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 el retiro del implante anticonceptivo subdérmico se realiza en la clínica con anestesia local, en unos minutos, en español y sin seguro médico, en el noroeste de Houston. Se atiende sin cita previa y se explica el cuidado posterior y las opciones para continuar con otro método.\n\n**¿Qué incluye el procedimiento?**\n- Revisión del brazo y localización del implante por palpación\n- Anestesia local en la zona\n- Extracción del implante a través de una incisión de 2 a 3 milímetros\n- Vendaje compresivo e indicaciones de cuidado\n- Orientación sobre el siguiente método anticonceptivo\n- Referencia si el implante no se palpa y requiere localización por imagen\n\n**¿Cuándo debe retirarse el implante?**\nEl implante subdérmico está aprobado para 3 años de uso; después de ese tiempo debe retirarse o reemplazarse. También se retira antes si deseas embarazarte, cambiar de método o si tienes efectos secundarios que no toleras, como sangrado irregular persistente.\n\n**¿Cómo es el procedimiento paso a paso?**\n1. Se localiza el implante en la parte interna del brazo y se marca su posición.\n2. Se limpia la piel y se aplica anestesia local; sentirás un pequeño pinchazo.\n3. Se hace una incisión de 2 a 3 milímetros en el extremo del implante y se extrae con una pinza.\n4. Se cierra con un vendaje adhesivo, sin puntos, y se coloca una venda compresiva.\nEl retiro suele tomar de 5 a 10 minutos.\n\n**¿Cómo cuido el brazo después?**\n- Mantén la venda compresiva 24 horas para evitar moretones\n- Conserva la zona limpia y seca durante 3 a 5 días\n- Es normal un moretón y molestia leve durante una semana\n- Acude si hay enrojecimiento que se extiende, pus, fiebre o dolor que aumenta\n\n**¿Cuándo vuelve la fertilidad?**\nLa ovulación puede regresar en las primeras semanas después del retiro. Si no deseas embarazarte, inicia otro método de inmediato; en la misma consulta se puede recetar la pastilla o aplicar la inyección anticonceptiva.\n\n**¿Qué pasa si no se palpa el implante?**\nEn pocos casos el implante está más profundo o se ha desplazado. No se intenta extraer a ciegas: se indica un estudio de imagen y se refiere a un especialista para el retiro guiado.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the contraceptive subdermal implant is removed in the clinic under local anesthesia, in a few minutes, in Spanish and without insurance, in northwest Houston. Walk-ins are welcome, and after-care and options to continue with another method are explained.\n\n**What does the procedure include?**\n- Arm exam and locating the implant by touch\n- Local anesthesia in the area\n- Removal of the implant through a 2 to 3 millimeter incision\n- Pressure bandage and care instructions\n- Guidance on your next contraceptive method\n- Referral if the implant cannot be felt and needs imaging to locate it\n\n**When should the implant be removed?**\nThe subdermal implant is approved for 3 years of use; after that it must be removed or replaced. It is also removed earlier if you want to get pregnant, switch methods or have side effects you cannot tolerate, such as persistent irregular bleeding.\n\n**What is the procedure, step by step?**\n1. The implant is located on the inner arm and its position is marked.\n2. The skin is cleaned and local anesthesia is applied; you will feel a small pinch.\n3. A 2 to 3 millimeter incision is made at the end of the implant and it is removed with forceps.\n4. The site is closed with an adhesive bandage, no stitches, and a pressure bandage is applied.\nRemoval usually takes 5 to 10 minutes.\n\n**How do I care for my arm afterward?**\n- Keep the pressure bandage on for 24 hours to avoid bruising\n- Keep the area clean and dry for 3 to 5 days\n- A bruise and mild discomfort for a week are normal\n- Come in if redness spreads, there is pus, fever or increasing pain\n\n**When does fertility return?**\nOvulation can return within the first weeks after removal. If you do not want to get pregnant, start another method right away; in the same visit the pill can be prescribed or the contraceptive injection given.\n\n**What if the implant cannot be felt?**\nIn a few cases the implant is deeper or has moved. It is never removed blindly: imaging is ordered and you are referred to a specialist for guided removal.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 9,
    "updatedAt": "2026-09-05"
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
    "longDescription": "En Clínica Hispana Familiar 529 el examen de heces fecales detecta parásitos, infecciones intestinales y sangre oculta, con resultados explicados en español y tratamiento cuando se requiere. Sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el examen de heces?**\n- Examen general de heces (coprológico): consistencia, color, moco y restos de alimentos\n- Búsqueda de parásitos y sus huevos (coproparasitoscópico), como amebas, giardia y lombrices\n- Detección de infecciones bacterianas cuando hay diarrea con fiebre o sangre\n- Prueba de sangre oculta en heces\n- Consulta médica para interpretar el resultado e iniciar tratamiento\n\n**¿Cuándo se recomienda?**\n- Diarrea que dura más de 3 días o que se repite\n- Dolor abdominal, gases e inflamación persistentes\n- Sangre o moco en las evacuaciones\n- Pérdida de peso sin explicación o anemia\n- Niños con picazón anal, dolor de estómago frecuente o poco apetito\n- Requisito para manipuladores de alimentos o trámites\n\n**¿Cómo recojo la muestra paso a paso?**\n1. Pide el recipiente estéril en la clínica o usa uno limpio con tapa.\n2. Evacúa en un recipiente seco o sobre papel limpio, sin que la muestra toque el agua del inodoro ni se mezcle con orina.\n3. Con la paleta del recipiente, toma una porción del tamaño de una nuez, incluyendo las partes con moco o sangre si las hay.\n4. Cierra bien, escribe tu nombre y la fecha, y entrégala en la clínica en las siguientes 2 horas, o refrigérala hasta 24 horas.\n\n**¿Necesito alguna preparación?**\nNo requiere ayuno. Evita laxantes, antiácidos y antidiarreicos 48 horas antes, y antibióticos salvo indicación médica. Para la prueba de sangre oculta, suspende 3 días antes la carne roja y los antiinflamatorios como ibuprofeno. Para parásitos, a veces se piden 3 muestras de días distintos porque no se eliminan a diario.\n\n**¿Cuándo están los resultados?**\nEl examen general se revisa en la clínica y el análisis de parásitos o cultivos se envía a laboratorio; pregunta en tu visita cuándo estará listo el tuyo. Con el resultado, el médico indica el antiparasitario o el antibiótico necesario, que puedes surtir en la farmacia de la clínica.\n\n**¿Cuándo acudir de inmediato?**\nDiarrea con sangre abundante, fiebre alta, signos de deshidratación como boca seca y poca orina, o dolor abdominal intenso requieren atención el mismo día.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the stool test detects parasites, intestinal infections and occult blood, with results explained in Spanish and treatment when needed. No appointment and no insurance needed, in northwest Houston.\n\n**What does the stool test include?**\n- General stool exam: consistency, color, mucus and food remnants\n- Search for parasites and their eggs, such as amoebas, giardia and worms\n- Detection of bacterial infections when there is diarrhea with fever or blood\n- Fecal occult blood test\n- Medical visit to interpret the result and start treatment\n\n**When is it recommended?**\n- Diarrhea lasting more than 3 days or that keeps coming back\n- Persistent abdominal pain, gas and bloating\n- Blood or mucus in the stool\n- Unexplained weight loss or anemia\n- Children with anal itching, frequent stomachaches or poor appetite\n- Requirement for food handlers or paperwork\n\n**How do I collect the sample, step by step?**\n1. Ask for the sterile container at the clinic or use a clean one with a lid.\n2. Have the bowel movement in a dry container or on clean paper, without the sample touching toilet water or mixing with urine.\n3. With the container's spoon, take a walnut-sized portion, including any parts with mucus or blood.\n4. Close it tightly, write your name and the date, and bring it to the clinic within 2 hours, or refrigerate it for up to 24 hours.\n\n**Do I need any preparation?**\nNo fasting is required. Avoid laxatives, antacids and antidiarrheals for 48 hours before, and antibiotics unless prescribed. For the occult blood test, stop red meat and anti-inflammatories such as ibuprofen 3 days before. For parasites, 3 samples from different days are sometimes requested because they are not shed every day.\n\n**When are results ready?**\nThe general exam is reviewed at the clinic and the parasite analysis or cultures are sent to the lab; ask during your visit when yours will be ready. With the result, the doctor prescribes the necessary antiparasitic or antibiotic, which you can fill at the clinic pharmacy.\n\n**When should I come in right away?**\nDiarrhea with heavy bleeding, high fever, signs of dehydration such as dry mouth and little urine, or severe abdominal pain need same-day care.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 13,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba de estreptococo (strep test) en Houston, TX. Resultado rápido y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Strep test in Houston, TX. Fast result and treatment in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 la prueba rápida de estreptococo se hace con un hisopado de garganta y da resultado en 5 a 10 minutos; si es positiva, el antibiótico se receta en la misma visita. Atención en español, sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el servicio?**\n- Revisión de garganta, amígdalas, ganglios del cuello y oídos\n- Hisopado de garganta para la prueba rápida de estreptococo del grupo A\n- Resultado en 5 a 10 minutos\n- Receta de antibiótico si el resultado es positivo, surtida en la farmacia de la clínica\n- Tratamiento del dolor y la fiebre\n- Cultivo de garganta de confirmación cuando el médico lo considera necesario\n\n**¿Cuáles son los síntomas de la faringitis por estreptococo?**\n- Dolor de garganta intenso que empieza de golpe\n- Fiebre de 38 °C (100.4 °F) o más\n- Amígdalas rojas e inflamadas, a veces con placas blancas\n- Ganglios del cuello inflamados y dolorosos\n- Puntos rojos en el paladar; en niños, dolor de cabeza, náusea o vómito\nLa tos, la voz ronca y el moco nasal apuntan más a un virus que a estreptococo.\n\n**¿Cómo es la prueba paso a paso?**\n1. Se revisan los síntomas y se examina la garganta.\n2. Se frota un hisopo en las amígdalas y la parte posterior de la garganta durante unos segundos; puede dar ganas de vomitar pero no duele.\n3. La muestra se procesa en la clínica y el resultado está en 5 a 10 minutos.\n4. Con resultado positivo, sales con la receta. Con resultado negativo y síntomas muy sugestivos, sobre todo en niños, se puede enviar un cultivo que tarda de 24 a 48 horas.\n\n**¿Cómo es el tratamiento?**\nEl estreptococo se trata con penicilina o amoxicilina durante 10 días. El dolor y la fiebre mejoran en 1 a 2 días, pero el tratamiento completo evita complicaciones como la fiebre reumática. Deja de ser contagioso 24 horas después de la primera dosis, cuando ya puede volver a la escuela o al trabajo.\n\n**¿Por qué no dar antibiótico sin prueba?**\nLa mayoría de los dolores de garganta son virales y no mejoran con antibióticos. La prueba evita tratamientos innecesarios, efectos secundarios y resistencia bacteriana.\n\n**¿Cuándo acudir de inmediato?**\nDificultad para respirar o tragar saliva, babeo, hinchazón del cuello, voz apagada o rigidez de cuello requieren atención urgente.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the rapid strep test is done with a throat swab and gives a result in 5 to 10 minutes; if positive, the antibiotic is prescribed in the same visit. Care in Spanish, with no appointment and no insurance needed, in northwest Houston.\n\n**What does the service include?**\n- Exam of throat, tonsils, neck lymph nodes and ears\n- Throat swab for the rapid group A strep test\n- Result in 5 to 10 minutes\n- Antibiotic prescription if positive, filled at the clinic pharmacy\n- Pain and fever treatment\n- Confirmatory throat culture when the doctor considers it necessary\n\n**What are the symptoms of strep throat?**\n- Severe sore throat that starts suddenly\n- Fever of 100.4 °F (38 °C) or higher\n- Red, swollen tonsils, sometimes with white patches\n- Swollen, tender lymph nodes in the neck\n- Red spots on the roof of the mouth; in children, headache, nausea or vomiting\nCough, hoarseness and runny nose point more to a virus than to strep.\n\n**What is the test like, step by step?**\n1. Symptoms are reviewed and the throat is examined.\n2. A swab is rubbed on the tonsils and the back of the throat for a few seconds; it may trigger a gag but does not hurt.\n3. The sample is processed in the clinic and the result is ready in 5 to 10 minutes.\n4. With a positive result, you leave with the prescription. With a negative result and very suggestive symptoms, especially in children, a culture that takes 24 to 48 hours may be sent.\n\n**What is the treatment like?**\nStrep is treated with penicillin or amoxicillin for 10 days. Pain and fever improve in 1 to 2 days, but the full course prevents complications such as rheumatic fever. You stop being contagious 24 hours after the first dose, when you can return to school or work.\n\n**Why not give antibiotics without a test?**\nMost sore throats are viral and do not improve with antibiotics. The test avoids unnecessary treatment, side effects and bacterial resistance.\n\n**When should I come in right away?**\nTrouble breathing or swallowing saliva, drooling, neck swelling, muffled voice or a stiff neck need urgent care.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 14,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Examen de tuberculosis (TB/PPD) en Houston, TX. Para trabajo y escuela, en español, con precios accesibles.",
    "descriptionEn": "Tuberculosis (TB/PPD) test in Houston, TX. For work and school, in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 la prueba de tuberculosis se realiza con la prueba cutánea PPD, que se lee 48 a 72 horas después, o con la prueba de sangre IGRA, y se entrega la documentación para trabajo, escuela o trámites. Atención en español, sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el servicio?**\n- Prueba cutánea de tuberculina (PPD o Mantoux), con aplicación en el antebrazo\n- Lectura del resultado en una segunda visita, entre 48 y 72 horas después\n- Prueba de sangre IGRA como alternativa, con una sola visita\n- Documento con el resultado para empleo, escuela, voluntariado o trámite migratorio\n- Orientación y radiografía de tórax cuando el resultado es positivo\n\n**¿PPD o prueba de sangre? ¿Cuál me conviene?**\n- PPD: económica, requiere dos visitas y puede dar falso positivo en personas vacunadas con BCG, común en América Latina\n- IGRA (sangre): una sola visita, no se altera por la vacuna BCG y es la que exige USCIS para el examen de inmigración I-693\n- Si te vacunaste con BCG o no puedes regresar a la lectura, la prueba de sangre es la mejor opción\n\n**¿Cómo es la prueba PPD paso a paso?**\n1. Se inyecta una pequeña cantidad de tuberculina bajo la piel del antebrazo; se forma una pequeña ampolla que desaparece en minutos.\n2. No cubras la zona con curita ni la rasques; puedes bañarte con normalidad.\n3. Regresa entre 48 y 72 horas después para la lectura. Si pasan más de 72 horas, la prueba debe repetirse.\n4. El médico mide la induración, el bulto endurecido, no el enrojecimiento, y documenta el resultado.\n\n**¿Qué significa un resultado positivo?**\nIndica contacto previo con la bacteria, no necesariamente enfermedad activa. Se realiza una radiografía de tórax y una evaluación de síntomas. La tuberculosis latente no contagia y se trata con medicamentos preventivos durante 3 a 4 meses; la enfermedad activa requiere tratamiento completo y notificación al departamento de salud.\n\n**¿Cuándo no se puede hacer la PPD?**\nSi recibiste una vacuna de virus vivo, como MMR o varicela, en las últimas 4 semanas, o si tuviste una reacción grave a la tuberculina anteriormente. En esos casos se usa la prueba de sangre.\n\n**¿Quién suele pedir esta prueba?**\nEmpleos en salud, cuidado infantil y alimentos, escuelas y universidades, programas de voluntariado, y el examen médico de inmigración I-693, que la clínica también realiza.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the tuberculosis test is done with the PPD skin test, read 48 to 72 hours later, or with the IGRA blood test, and documentation is provided for work, school or paperwork. Care in Spanish, with no appointment and no insurance needed, in northwest Houston.\n\n**What does the service include?**\n- Tuberculin skin test (PPD or Mantoux), placed on the forearm\n- Result reading at a second visit, 48 to 72 hours later\n- IGRA blood test as an alternative, with a single visit\n- Result document for employment, school, volunteering or immigration paperwork\n- Guidance and chest X-ray when the result is positive\n\n**PPD or blood test? Which one is right for me?**\n- PPD: inexpensive, requires two visits and can give a false positive in people vaccinated with BCG, common in Latin America\n- IGRA (blood): a single visit, not affected by the BCG vaccine, and the one USCIS requires for the I-693 immigration exam\n- If you had the BCG vaccine or cannot return for the reading, the blood test is the best option\n\n**What is the PPD test like, step by step?**\n1. A small amount of tuberculin is injected under the skin of the forearm; a small bump forms and disappears within minutes.\n2. Do not cover the area with a bandage or scratch it; you can bathe normally.\n3. Return 48 to 72 hours later for the reading. If more than 72 hours pass, the test must be repeated.\n4. The doctor measures the induration, the hardened bump, not the redness, and documents the result.\n\n**What does a positive result mean?**\nIt indicates previous contact with the bacteria, not necessarily active disease. A chest X-ray and a symptom evaluation are done. Latent tuberculosis is not contagious and is treated with preventive medication for 3 to 4 months; active disease requires full treatment and notification to the health department.\n\n**When can the PPD not be done?**\nIf you received a live-virus vaccine, such as MMR or varicella, in the last 4 weeks, or if you previously had a severe reaction to tuberculin. In those cases the blood test is used.\n\n**Who usually requires this test?**\nHealthcare, childcare and food jobs, schools and universities, volunteer programs, and the I-693 immigration medical exam, which the clinic also performs.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 15,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS/STD confidenciales en Houston, TX. Resultados y tratamiento en español, con precios accesibles.",
    "descriptionEn": "Confidential STD testing in Houston, TX. Results and treatment in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 las pruebas de enfermedades de transmisión sexual se realizan de forma confidencial, con muestra de sangre y orina, resultados explicados en español y tratamiento en la clínica cuando el resultado es positivo. Sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el servicio?**\n- Consulta privada para evaluar síntomas y factores de riesgo\n- Pruebas de sangre: VIH, sífilis, hepatitis B y hepatitis C\n- Pruebas de orina: clamidia y gonorrea\n- Evaluación de lesiones genitales y prueba de herpes cuando hay llagas\n- Tratamiento con antibióticos para clamidia, gonorrea, sífilis y tricomonas, surtido en la farmacia de la clínica\n- Orientación para la pareja y para prevenir nuevas infecciones\n\n**¿Cuándo debo hacerme la prueba?**\n- Después de una relación sin protección o con una pareja nueva\n- Si tienes síntomas: secreción, ardor al orinar, llagas, verrugas, dolor pélvico o sangrado fuera de la regla\n- Una vez al año si tienes menos de 25 años y vida sexual activa, o parejas múltiples\n- Al inicio del embarazo\n- Muchas infecciones no dan síntomas; la única forma de saberlo es la prueba\n\n**¿Cuánto debo esperar después del contacto para que la prueba sea confiable?**\n- Clamidia y gonorrea: 1 a 2 semanas\n- VIH con prueba de cuarta generación: 18 a 45 días\n- Sífilis: 3 a 6 semanas\n- Hepatitis B y C: 6 a 9 semanas\nSi el contacto fue reciente, se puede hacer una prueba ahora y repetirla al cumplir el periodo de ventana.\n\n**¿Cómo es la visita paso a paso?**\n1. Consulta privada con el médico; nada se comparte con terceros.\n2. Toma de muestra de sangre y de orina; conviene no orinar la hora previa.\n3. Los resultados llegan del laboratorio en pocos días; pregunta en tu visita el tiempo estimado.\n4. Con resultado positivo, se inicia el tratamiento y se indica cómo tratar a la pareja.\n\n**¿Cómo es el tratamiento?**\nClamidia, gonorrea, sífilis y tricomonas se curan con antibióticos. Debes evitar relaciones hasta 7 días después de terminar el tratamiento y hasta que la pareja también esté tratada. El herpes y el VIH no se curan pero se controlan con medicamentos; para VIH la clínica refiere a atención especializada.\n\n**¿Cómo prevenir las infecciones de transmisión sexual?**\nUso de condón en cada relación, vacunas contra hepatitis B y VPH, pruebas periódicas y tratamiento simultáneo de la pareja.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 sexually transmitted disease testing is done confidentially, with blood and urine samples, results explained in Spanish and treatment at the clinic when a result is positive. No appointment and no insurance needed, in northwest Houston.\n\n**What does the service include?**\n- Private visit to evaluate symptoms and risk factors\n- Blood tests: HIV, syphilis, hepatitis B and hepatitis C\n- Urine tests: chlamydia and gonorrhea\n- Evaluation of genital lesions and herpes testing when there are sores\n- Antibiotic treatment for chlamydia, gonorrhea, syphilis and trichomonas, filled at the clinic pharmacy\n- Guidance for your partner and for preventing new infections\n\n**When should I get tested?**\n- After unprotected sex or sex with a new partner\n- If you have symptoms: discharge, burning when urinating, sores, warts, pelvic pain or bleeding between periods\n- Once a year if you are under 25 and sexually active, or have multiple partners\n- At the start of pregnancy\n- Many infections cause no symptoms; the only way to know is to test\n\n**How long should I wait after exposure for a reliable test?**\n- Chlamydia and gonorrhea: 1 to 2 weeks\n- HIV with a fourth-generation test: 18 to 45 days\n- Syphilis: 3 to 6 weeks\n- Hepatitis B and C: 6 to 9 weeks\nIf the exposure was recent, a test can be done now and repeated once the window period has passed.\n\n**What is the visit like, step by step?**\n1. Private visit with the doctor; nothing is shared with third parties.\n2. Blood and urine samples are collected; it helps not to urinate during the previous hour.\n3. Results come back from the lab in a few days; ask during your visit for the estimated time.\n4. With a positive result, treatment starts and you are told how to treat your partner.\n\n**What is the treatment like?**\nChlamydia, gonorrhea, syphilis and trichomonas are cured with antibiotics. Avoid sex until 7 days after finishing treatment and until your partner has also been treated. Herpes and HIV are not cured but are controlled with medication; for HIV the clinic refers to specialized care.\n\n**How can I prevent sexually transmitted infections?**\nCondom use every time, hepatitis B and HPV vaccines, regular testing and simultaneous treatment of your partner.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 16,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Exámenes de alcohol y drogas en Houston, TX. Para empleo y trámites, en español, con precios accesibles.",
    "descriptionEn": "Alcohol and drug testing in Houston, TX. For employment and paperwork, in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se realizan pruebas de drogas en orina y pruebas de alcohol para empleo, trámites y requisitos personales, sin cita previa, en español y sin seguro médico, en el noroeste de Houston. El resultado se documenta para entregarlo al empleador o a la institución que lo pide.\n\n**¿Qué incluye el servicio?**\n- Prueba de drogas en orina de panel múltiple (marihuana, cocaína, opiáceos, anfetaminas, metanfetaminas, benzodiacepinas y otras sustancias, según el panel)\n- Prueba de alcohol\n- Verificación de identidad y recolección supervisada de la muestra\n- Documento con el resultado para tu empleador, escuela o trámite\n- Confirmación en laboratorio cuando el resultado inicial es positivo o cuando el solicitante lo exige\n\n**¿Quién suele pedir esta prueba?**\n- Empleadores, antes de contratar o de forma periódica\n- Agencias de personal y contratistas\n- Escuelas, programas de capacitación y voluntariado\n- Trámites legales o personales que requieren un resultado documentado\n\n**¿Cómo es el proceso paso a paso?**\n1. Presentas una identificación con foto y el formulario o la orden del empleador, si la tienes.\n2. Firmas el consentimiento y registras los medicamentos que tomas.\n3. Entregas la muestra de orina en un recipiente sellado, bajo el protocolo de custodia.\n4. El resultado rápido está en minutos; si se requiere confirmación de laboratorio, tarda de 1 a 3 días hábiles.\n5. Recibes el documento con el resultado, o se envía directamente a quien lo solicitó.\n\n**¿Cómo me preparo?**\n- Trae identificación con foto vigente\n- No tomes cantidades excesivas de agua antes de la prueba, porque una muestra diluida puede ser rechazada\n- Trae la lista de medicamentos recetados, ya que algunos pueden dar resultado positivo y deben documentarse\n\n**¿Cuánto tiempo se detectan las sustancias?**\nDepende de la sustancia y del uso: el alcohol se detecta en aliento y sangre por horas; la mayoría de las drogas se detectan en orina de 1 a 4 días, y la marihuana con uso frecuente hasta 30 días.\n\n**¿Hacen pruebas del programa DOT?**\nLas pruebas de drogas del programa federal DOT para conductores comerciales se gestionan a través del empleador o de su consorcio de pruebas. La clínica realiza el examen físico DOT y pruebas de drogas y alcohol para otros empleos y trámites.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 urine drug tests and alcohol tests are performed for employment, paperwork and personal requirements, with no appointment needed, in Spanish and without insurance, in northwest Houston. The result is documented for your employer or the institution requesting it.\n\n**What does the service include?**\n- Multi-panel urine drug test (marijuana, cocaine, opiates, amphetamines, methamphetamines, benzodiazepines and other substances, depending on the panel)\n- Alcohol test\n- Identity verification and supervised sample collection\n- Result document for your employer, school or paperwork\n- Lab confirmation when the initial result is positive or when the requester requires it\n\n**Who usually asks for this test?**\n- Employers, before hiring or periodically\n- Staffing agencies and contractors\n- Schools, training programs and volunteer organizations\n- Legal or personal paperwork that requires a documented result\n\n**What is the process, step by step?**\n1. You present a photo ID and the employer's form or order, if you have one.\n2. You sign the consent and list the medications you take.\n3. You provide the urine sample in a sealed container, under chain-of-custody protocol.\n4. The rapid result is ready in minutes; if lab confirmation is required, it takes 1 to 3 business days.\n5. You receive the result document, or it is sent directly to the requester.\n\n**How do I prepare?**\n- Bring a valid photo ID\n- Do not drink excessive water before the test, since a diluted sample may be rejected\n- Bring your list of prescription medications, since some can cause a positive result and must be documented\n\n**How long are substances detectable?**\nIt depends on the substance and use: alcohol is detected in breath and blood for hours; most drugs are detected in urine for 1 to 4 days, and marijuana with frequent use for up to 30 days.\n\n**Do you do DOT program testing?**\nFederal DOT program drug tests for commercial drivers are handled through the employer or its testing consortium. The clinic performs the DOT physical exam and drug and alcohol tests for other jobs and paperwork.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 17,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma EKG en Houston, TX, rápido y sin dolor. Resultados y atención en español, con precios accesibles.",
    "descriptionEn": "Electrocardiogram EKG in Houston, TX, fast and painless. Results and care in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 el electrocardiograma (EKG) registra la actividad eléctrica del corazón en 5 a 10 minutos, sin dolor y sin preparación, con interpretación médica y resultados explicados en español. Sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el electrocardiograma?**\n- Registro de 12 derivaciones con 10 electrodos en pecho, brazos y piernas\n- Interpretación por el médico en la misma visita\n- Evaluación del ritmo, la frecuencia y la conducción eléctrica del corazón\n- Detección de signos de arritmia, infarto previo, crecimiento del corazón o alteraciones de electrolitos\n- Copia del trazado para tu expediente, examen laboral o cirugía\n- Referencia a cardiología cuando el resultado lo requiere\n\n**¿Cuándo se recomienda un EKG?**\n- Palpitaciones, latidos irregulares o sensación de que el corazón se detiene\n- Dolor o presión en el pecho, falta de aire o mareo\n- Presión arterial alta o diabetes, como parte del control anual\n- Antes de una cirugía o de iniciar un programa de ejercicio intenso\n- Examen médico para trabajo, deporte o autorización de actividad física\n- Antecedentes familiares de muerte súbita o enfermedad cardiaca temprana\n\n**¿Cómo es el estudio paso a paso?**\n1. Te recuestas y se descubren el pecho, los tobillos y las muñecas.\n2. Se colocan 10 electrodos adhesivos; puede limpiarse la piel o rasurar una zona pequeña para que hagan buen contacto.\n3. Permaneces quieto y respirando con normalidad durante unos 10 segundos de registro.\n4. Se retiran los electrodos y el médico interpreta el trazado de inmediato.\nNo se siente ninguna corriente: el aparato solo lee la actividad del corazón.\n\n**¿Necesito preparación?**\nNo requiere ayuno ni suspender medicamentos. Evita cremas o aceites en el pecho ese día, no hagas ejercicio intenso justo antes y usa ropa fácil de quitar. Trae la lista de tus medicamentos y estudios previos del corazón, si los tienes.\n\n**¿Qué detecta y qué no detecta?**\nEl EKG en reposo detecta arritmias presentes en ese momento, bloqueos, signos de infarto antiguo o en curso y sobrecarga del corazón. No detecta obstrucciones de las arterias sin síntomas ni arritmias que aparecen solo de forma ocasional; para eso existen la prueba de esfuerzo y el monitor Holter, a los que el médico refiere si es necesario.\n\n**¿Cuándo acudir a urgencias en lugar de la clínica?**\nDolor en el pecho que dura más de 15 minutos, se extiende al brazo o la mandíbula, o viene con sudoración, náusea y falta de aire puede ser un infarto. Llama al 911.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the electrocardiogram (EKG) records the heart's electrical activity in 5 to 10 minutes, painlessly and with no preparation, with medical interpretation and results explained in Spanish. No appointment and no insurance needed, in northwest Houston.\n\n**What does the electrocardiogram include?**\n- 12-lead recording with 10 electrodes on the chest, arms and legs\n- Interpretation by the doctor in the same visit\n- Evaluation of heart rhythm, rate and electrical conduction\n- Detection of signs of arrhythmia, previous heart attack, heart enlargement or electrolyte disturbances\n- Copy of the tracing for your records, work exam or surgery\n- Cardiology referral when the result calls for it\n\n**When is an EKG recommended?**\n- Palpitations, irregular heartbeat or a feeling that the heart skips\n- Chest pain or pressure, shortness of breath or dizziness\n- High blood pressure or diabetes, as part of the annual checkup\n- Before surgery or before starting an intense exercise program\n- Medical exam for work, sports or physical activity clearance\n- Family history of sudden death or early heart disease\n\n**What is the test like, step by step?**\n1. You lie down and uncover your chest, ankles and wrists.\n2. Ten adhesive electrodes are placed; the skin may be cleaned or a small area shaved for good contact.\n3. You stay still and breathe normally during about 10 seconds of recording.\n4. The electrodes are removed and the doctor reads the tracing right away.\nYou feel no current: the machine only reads the heart's activity.\n\n**Do I need to prepare?**\nNo fasting and no need to stop medications. Avoid creams or oils on your chest that day, do not exercise hard right before, and wear clothes that are easy to remove. Bring your medication list and any previous heart tests you have.\n\n**What does it detect and what does it not detect?**\nA resting EKG detects arrhythmias present at that moment, blocks, signs of an old or ongoing heart attack and strain on the heart. It does not detect artery blockages without symptoms or arrhythmias that appear only occasionally; for those there are the stress test and the Holter monitor, which the doctor refers you to if needed.\n\n**When should I go to the ER instead of the clinic?**\nChest pain lasting more than 15 minutes, spreading to the arm or jaw, or coming with sweating, nausea and shortness of breath may be a heart attack. Call 911.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 18,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido y ecografía en Houston, TX: abdominal, pélvico y de embarazo. En español, con precios accesibles.",
    "descriptionEn": "Ultrasound and sonography in Houston, TX: abdominal, pelvic and pregnancy. In Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se realizan ultrasonidos abdominales, pélvicos, de embarazo y de tiroides en la clínica, sin radiación y sin dolor, con resultados explicados en español. Sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué tipos de ultrasonido se realizan?**\n- Abdominal: hígado, vesícula biliar y cálculos, páncreas, bazo, riñones y aorta\n- Pélvico: útero, ovarios, quistes, miomas y causas de dolor o sangrado\n- Embarazo: confirmación, latido, número de bebés, fecha probable de parto y seguimiento\n- Tiroides: tamaño de la glándula y nódulos\n- Tejidos blandos: bultos, quistes y lipomas antes de una cirugía menor\n- Renal y vesical: cálculos, retención de orina y evaluación de la próstata\n\n**¿Cómo me preparo según el tipo de estudio?**\n1. Abdominal: ayuno de 6 a 8 horas para que la vesícula esté llena y no haya gas; puedes tomar agua.\n2. Pélvico y de embarazo temprano: vejiga llena; toma de 3 a 4 vasos de agua una hora antes y no orines.\n3. Renal y vesical: vejiga llena, igual que el pélvico.\n4. Tiroides y tejidos blandos: sin preparación.\n5. Embarazo después de la semana 12: no requiere vejiga llena.\n\n**¿Cómo es el estudio paso a paso?**\n1. Te recuestas y se aplica un gel tibio sobre la piel de la zona a examinar.\n2. El transductor se desliza sobre la piel; puede hacer algo de presión pero no duele.\n3. Se toman imágenes y medidas; el estudio dura entre 15 y 30 minutos.\n4. El médico revisa las imágenes y te explica los hallazgos en español.\n\n**¿Es seguro el ultrasonido?**\nSí. Usa ondas de sonido, no radiación, por lo que es seguro en el embarazo y se puede repetir las veces necesarias. No tiene efectos secundarios.\n\n**¿Cuándo se recomienda un ultrasonido?**\n- Dolor abdominal, sobre todo en el lado derecho después de comer\n- Dolor pélvico, sangrado irregular o sospecha de quistes o miomas\n- Prueba de embarazo positiva, para confirmar y fechar la gestación\n- Bulto en el cuello o alteración en las pruebas de tiroides\n- Sangre en la orina o cólico renal\n- Evaluación de un bulto en la piel antes de retirarlo\n\n**¿Hay un paquete que incluya ultrasonido?**\nSí. La clínica ofrece un chequeo completo de la mujer con ultrasonido a precio fijo, publicado en la página de promociones.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 abdominal, pelvic, pregnancy and thyroid ultrasounds are performed in the clinic, with no radiation and no pain, with results explained in Spanish. No appointment and no insurance needed, in northwest Houston.\n\n**Which types of ultrasound are performed?**\n- Abdominal: liver, gallbladder and gallstones, pancreas, spleen, kidneys and aorta\n- Pelvic: uterus, ovaries, cysts, fibroids and causes of pain or bleeding\n- Pregnancy: confirmation, heartbeat, number of babies, due date and follow-up\n- Thyroid: gland size and nodules\n- Soft tissue: lumps, cysts and lipomas before minor surgery\n- Kidney and bladder: stones, urine retention and prostate evaluation\n\n**How do I prepare for each type of study?**\n1. Abdominal: fast for 6 to 8 hours so the gallbladder is full and there is no gas; water is fine.\n2. Pelvic and early pregnancy: full bladder; drink 3 to 4 glasses of water one hour before and do not urinate.\n3. Kidney and bladder: full bladder, same as pelvic.\n4. Thyroid and soft tissue: no preparation.\n5. Pregnancy after week 12: a full bladder is not required.\n\n**What is the study like, step by step?**\n1. You lie down and warm gel is applied to the skin over the area to be examined.\n2. The transducer glides over the skin; it may press a little but does not hurt.\n3. Images and measurements are taken; the study lasts 15 to 30 minutes.\n4. The doctor reviews the images and explains the findings in Spanish.\n\n**Is ultrasound safe?**\nYes. It uses sound waves, not radiation, so it is safe in pregnancy and can be repeated as often as needed. It has no side effects.\n\n**When is an ultrasound recommended?**\n- Abdominal pain, especially on the right side after eating\n- Pelvic pain, irregular bleeding or suspected cysts or fibroids\n- Positive pregnancy test, to confirm and date the pregnancy\n- Neck lump or abnormal thyroid tests\n- Blood in the urine or kidney colic\n- Evaluation of a skin lump before removing it\n\n**Is there a package that includes ultrasound?**\nYes. The clinic offers a complete women's checkup with ultrasound at a fixed price, listed on the promotions page.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 19,
    "updatedAt": "2026-09-05"
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
    "longDescription": "En Clínica Hispana Familiar 529 se aplican la vacuna anual contra la influenza y la vacuna contra el tétanos (Td o Tdap) por personal médico, sin cita previa, en español y sin seguro médico, en el noroeste de Houston. También se aplican las vacunas requeridas para el examen médico de inmigración I-693.\n\n**¿Qué vacunas se aplican en la clínica?**\n- Influenza (flu): dosis anual para mayores de 6 meses\n- Tétanos, difteria y tos ferina (Tdap) y refuerzo de tétanos y difteria (Td)\n- Vacunas requeridas por USCIS para el examen de inmigración, según edad y registro previo\n- Revisión de tu cartilla y registro de la dosis aplicada\n- Orientación sobre cuándo toca el siguiente refuerzo\n\n**¿Cuándo debo vacunarme contra la influenza?**\nCada año, idealmente entre septiembre y octubre, antes de que empiece la temporada. La protección tarda unas 2 semanas en desarrollarse y dura toda la temporada. Sigue siendo útil vacunarse en diciembre o enero si no lo hiciste antes. Es especialmente importante para mayores de 65 años, embarazadas, niños pequeños y personas con diabetes, asma o enfermedad del corazón.\n\n**¿Cada cuánto se aplica la vacuna del tétanos?**\n1. Los adultos necesitan una dosis de Tdap si nunca la recibieron, y después un refuerzo de Td o Tdap cada 10 años.\n2. Ante una herida sucia o profunda, se aplica un refuerzo si han pasado más de 5 años desde la última dosis.\n3. En cada embarazo se recomienda una dosis de Tdap entre las semanas 27 y 36 para proteger al bebé de la tos ferina.\n4. Quienes conviven con un recién nacido deben tener la Tdap al día.\n\n**¿Cómo es la visita paso a paso?**\n1. Se revisa tu historial, alergias y la fecha de tus últimas vacunas.\n2. Se aplica la vacuna en el brazo; toma menos de un minuto.\n3. Permaneces 15 minutos en observación si tienes antecedentes de reacciones alérgicas.\n4. Recibes el registro de la dosis para tu cartilla o tu trámite.\n\n**¿Qué efectos secundarios son normales?**\nDolor, enrojecimiento o hinchazón en el brazo durante 1 o 2 días, y a veces febrícula, dolor de cabeza o cansancio leve. La vacuna de la influenza no puede causar gripe porque no contiene virus vivo. Una reacción alérgica grave es muy rara y se atiende de inmediato.\n\n**¿Cuándo no debo vacunarme ese día?**\nSi tienes fiebre o una enfermedad aguda moderada, conviene esperar a recuperarte. Si tuviste una reacción alérgica grave a una dosis anterior o al huevo, coméntalo antes de la aplicación.\n\n**¿Qué debo traer?**\nTu cartilla o registro de vacunas si lo tienes. Si es para el examen de inmigración, trae también el registro traducido al inglés.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 the annual flu vaccine and the tetanus vaccine (Td or Tdap) are administered by medical staff, with no appointment, in Spanish and without insurance, in northwest Houston. The vaccines required for the I-693 immigration medical exam are also given.\n\n**Which vaccines are given at the clinic?**\n- Influenza (flu): annual dose for anyone over 6 months\n- Tetanus, diphtheria and pertussis (Tdap) and the tetanus-diphtheria booster (Td)\n- Vaccines required by USCIS for the immigration exam, by age and previous record\n- Review of your vaccination card and documentation of the dose given\n- Guidance on when the next booster is due\n\n**When should I get the flu vaccine?**\nEvery year, ideally between September and October, before the season starts. Protection takes about 2 weeks to develop and lasts the whole season. It is still worth getting in December or January if you missed it. It is especially important for people over 65, pregnant women, young children and people with diabetes, asthma or heart disease.\n\n**How often is the tetanus vaccine given?**\n1. Adults need one Tdap dose if they never had it, and then a Td or Tdap booster every 10 years.\n2. After a dirty or deep wound, a booster is given if more than 5 years have passed since the last dose.\n3. In every pregnancy a Tdap dose is recommended between weeks 27 and 36 to protect the baby from whooping cough.\n4. Anyone living with a newborn should be up to date on Tdap.\n\n**What is the visit like, step by step?**\n1. Your history, allergies and the dates of your last vaccines are reviewed.\n2. The vaccine is given in the arm; it takes less than a minute.\n3. You stay 15 minutes for observation if you have a history of allergic reactions.\n4. You receive the dose record for your card or paperwork.\n\n**Which side effects are normal?**\nPain, redness or swelling in the arm for 1 or 2 days, and sometimes low-grade fever, headache or mild tiredness. The flu vaccine cannot cause the flu because it contains no live virus. A severe allergic reaction is very rare and is treated immediately.\n\n**When should I not get vaccinated that day?**\nIf you have a fever or a moderate acute illness, it is better to wait until you recover. If you had a severe allergic reaction to a previous dose or to eggs, mention it before the shot.\n\n**What should I bring?**\nYour vaccination card or record if you have one. If it is for the immigration exam, also bring the record translated into English.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 22,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados (terapia IV) en Houston, TX. Hidratación y vitaminas en español, con precios accesibles.",
    "descriptionEn": "Vitamin IV therapy in Houston, TX. Hydration and vitamins in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 los sueros vitaminados se aplican por vía intravenosa con personal médico, después de una evaluación breve, en un ambiente cómodo y con atención en español. Sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el servicio?**\n- Evaluación breve de síntomas, presión arterial e historial para confirmar que el suero es adecuado\n- Suero de hidratación intravenosa\n- Vitaminas y minerales añadidos al suero según la necesidad, como complejo B, vitamina B12, vitamina C y magnesio\n- Aplicación y monitoreo por personal médico durante la infusión\n- Indicaciones posteriores en español\n\n**¿Para qué se usa un suero vitaminado?**\n- Deshidratación por calor, vómito, diarrea o exceso de alcohol\n- Cansancio y falta de energía tras un periodo de estrés o enfermedad\n- Recuperación después de una gripe o infección\n- Deficiencia de vitaminas confirmada por análisis\n- Apoyo en migraña, resaca o malestar general, junto con la evaluación médica\n\n**¿Cómo es la aplicación paso a paso?**\n1. El médico revisa tus síntomas, presión arterial y medicamentos, y elige el suero.\n2. Se coloca un catéter pequeño en una vena del brazo.\n3. La infusión dura entre 30 y 60 minutos mientras descansas sentado o recostado.\n4. Se retira el catéter y se coloca un vendaje; puedes seguir con tu día.\n\n**¿Qué diferencia hay con tomar vitaminas por la boca?**\nPor vía intravenosa las vitaminas y los líquidos llegan de inmediato a la sangre, sin pasar por el estómago, por lo que el efecto de hidratación es más rápido. Para deficiencias crónicas, el médico puede indicar también vitaminas orales o inyecciones de B12, que se explican en el blog de la clínica.\n\n**¿Quién no debe recibir un suero vitaminado?**\nPersonas con insuficiencia renal, insuficiencia cardiaca, presión arterial muy alta o alergia a alguno de los componentes. Por eso la evaluación previa es obligatoria; si hay una condición de riesgo, el médico indica otra opción.\n\n**¿Qué efectos secundarios puede tener?**\nMolestia o moretón en el sitio del catéter, sabor metálico o sensación de calor durante la infusión. Son leves y pasajeros. El personal supervisa toda la aplicación.\n\n**¿Hay un paquete que incluya vitaminas?**\nSí. La clínica ofrece un examen general de sangre con vitaminas a precio fijo, publicado en la página de promociones, útil para saber si tienes una deficiencia antes de tratarla.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 vitamin IV drips are given intravenously by medical staff, after a brief evaluation, in a comfortable setting and with care in Spanish. No appointment and no insurance needed, in northwest Houston.\n\n**What does the service include?**\n- Brief evaluation of symptoms, blood pressure and history to confirm the drip is appropriate\n- Intravenous hydration\n- Vitamins and minerals added to the drip as needed, such as B complex, vitamin B12, vitamin C and magnesium\n- Administration and monitoring by medical staff during the infusion\n- After-care instructions in Spanish\n\n**What is a vitamin drip used for?**\n- Dehydration from heat, vomiting, diarrhea or excess alcohol\n- Fatigue and low energy after a period of stress or illness\n- Recovery after the flu or an infection\n- Vitamin deficiency confirmed by lab work\n- Support for migraine, hangover or general malaise, together with a medical evaluation\n\n**What is the process, step by step?**\n1. The doctor reviews your symptoms, blood pressure and medications, and chooses the drip.\n2. A small catheter is placed in a vein in your arm.\n3. The infusion lasts 30 to 60 minutes while you rest sitting or lying down.\n4. The catheter is removed and a bandage is placed; you can go on with your day.\n\n**How is it different from taking vitamins by mouth?**\nIntravenously, vitamins and fluids reach the blood immediately, without passing through the stomach, so the hydration effect is faster. For chronic deficiencies, the doctor may also prescribe oral vitamins or B12 injections, which are explained on the clinic blog.\n\n**Who should not receive a vitamin drip?**\nPeople with kidney failure, heart failure, very high blood pressure or allergy to any of the components. That is why the prior evaluation is mandatory; if there is a risk condition, the doctor suggests another option.\n\n**What side effects can it have?**\nDiscomfort or bruising at the catheter site, a metallic taste or a feeling of warmth during the infusion. They are mild and temporary. Staff supervise the entire infusion.\n\n**Is there a package that includes vitamins?**\nYes. The clinic offers a general blood test with vitamins at a fixed price, listed on the promotions page, useful for knowing whether you have a deficiency before treating it.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 23,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "Suturas de heridas en Houston, TX. Cierre de cortes y heridas en español, con precios accesibles.",
    "descriptionEn": "Wound suturing in Houston, TX. Closing cuts and wounds in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se limpian y cierran cortes y heridas con suturas bajo anestesia local, sin cita previa, en español y sin seguro médico, en el noroeste de Houston. Lo ideal es acudir dentro de las primeras 6 a 8 horas después de la lesión.\n\n**¿Qué incluye el servicio?**\n- Evaluación de la profundidad de la herida y de daño a tendones, nervios o vasos\n- Limpieza, irrigación y retiro de cuerpos extraños\n- Anestesia local\n- Cierre con puntos de sutura, grapas o adhesivo, según la herida\n- Refuerzo de la vacuna del tétanos si han pasado más de 5 años\n- Indicaciones de cuidado, receta si se necesita y retiro de puntos en la clínica\n\n**¿Qué heridas necesitan puntos?**\n- Cortes de más de 1 centímetro o con los bordes que se separan\n- Heridas profundas en las que se ve grasa o tejido\n- Sangrado que no se detiene tras 10 minutos de presión\n- Cortes en la cara, las manos o sobre articulaciones, donde la cicatriz o el movimiento importan\nLos raspones y los cortes superficiales con bordes juntos suelen cerrar solos con limpieza y vendaje.\n\n**¿Cuánto tiempo tengo para suturar una herida?**\nLo ideal es dentro de las primeras 6 a 8 horas. En la cara y el cuero cabelludo se puede cerrar hasta 24 horas después. Pasado ese tiempo, la herida se limpia y se deja cerrar sola para evitar infecciones, o se cierra días después según la evolución.\n\n**¿Cómo es el procedimiento paso a paso?**\n1. Se examina la herida y se revisa el movimiento y la sensibilidad de la zona.\n2. Se aplica anestesia local; después del pinchazo inicial no sentirás dolor.\n3. Se lava la herida con abundante solución y se retiran restos.\n4. Se colocan los puntos y se cubre con un vendaje.\n5. Se aplica el refuerzo de tétanos si corresponde.\n\n**¿Cómo cuido los puntos en casa?**\n- Mantén el vendaje seco y limpio durante las primeras 24 a 48 horas\n- Después, lava suavemente con agua y jabón y seca sin frotar\n- No sumerjas la herida en agua, como piscina o tina, hasta que se retiren los puntos\n- Acude si hay enrojecimiento que crece, pus, calor, fiebre o dolor que aumenta\n\n**¿Cuándo se retiran los puntos?**\n1. Cara: 5 a 7 días\n2. Cuero cabelludo: 7 a 10 días\n3. Brazos, tronco y piernas: 10 a 14 días\n4. Manos, pies y articulaciones: 10 a 14 días\nEl retiro se hace en la clínica y toma unos minutos.\n\n**¿Cuándo ir a urgencias en lugar de la clínica?**\nSangrado que no se controla con presión, herida por arma o con hueso visible, amputación parcial, pérdida de sensibilidad o movimiento, y mordeduras profundas en la cara o las manos requieren atención de emergencia.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 cuts and wounds are cleaned and closed with sutures under local anesthesia, with no appointment, in Spanish and without insurance, in northwest Houston. It is best to come within the first 6 to 8 hours after the injury.\n\n**What does the service include?**\n- Evaluation of wound depth and damage to tendons, nerves or vessels\n- Cleaning, irrigation and removal of foreign bodies\n- Local anesthesia\n- Closure with stitches, staples or adhesive, depending on the wound\n- Tetanus booster if more than 5 years have passed\n- Care instructions, a prescription if needed, and suture removal at the clinic\n\n**Which wounds need stitches?**\n- Cuts longer than 1 centimeter or with edges that pull apart\n- Deep wounds where fat or tissue is visible\n- Bleeding that does not stop after 10 minutes of pressure\n- Cuts on the face, hands or over joints, where scarring or movement matter\nScrapes and shallow cuts with edges together usually close on their own with cleaning and a bandage.\n\n**How long do I have to get a wound stitched?**\nIdeally within the first 6 to 8 hours. On the face and scalp it can be closed up to 24 hours later. After that, the wound is cleaned and allowed to heal on its own to avoid infection, or closed days later depending on how it progresses.\n\n**What is the procedure, step by step?**\n1. The wound is examined and movement and sensation in the area are checked.\n2. Local anesthesia is applied; after the initial pinch you will not feel pain.\n3. The wound is washed with plenty of solution and debris is removed.\n4. Stitches are placed and the wound is covered with a bandage.\n5. A tetanus booster is given if needed.\n\n**How do I care for stitches at home?**\n- Keep the bandage dry and clean for the first 24 to 48 hours\n- Then wash gently with soap and water and pat dry\n- Do not soak the wound in water, such as a pool or bathtub, until the stitches are removed\n- Come in if redness spreads, there is pus, warmth, fever or increasing pain\n\n**When are stitches removed?**\n1. Face: 5 to 7 days\n2. Scalp: 7 to 10 days\n3. Arms, trunk and legs: 10 to 14 days\n4. Hands, feet and joints: 10 to 14 days\nRemoval is done at the clinic and takes a few minutes.\n\n**When should I go to the ER instead of the clinic?**\nBleeding that cannot be controlled with pressure, wounds from a weapon or with visible bone, partial amputation, loss of sensation or movement, and deep bites on the face or hands need emergency care.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 24,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Cura y curación de heridas en Houston, TX. Limpieza y vendajes en español, con precios accesibles.",
    "descriptionEn": "Wound care in Houston, TX. Cleaning and dressings in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se realizan curaciones de heridas: limpieza, desinfección, cambio de vendajes y seguimiento hasta la cicatrización, incluidas heridas postoperatorias, úlceras y quemaduras leves. Atención en español, sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye la curación de heridas?**\n- Evaluación de la herida: tamaño, profundidad, tejido y signos de infección\n- Limpieza con solución estéril y retiro de tejido muerto cuando es necesario\n- Aplicación de apósitos y vendajes adecuados al tipo de herida\n- Cambios de vendaje programados en la clínica\n- Receta de antibiótico cuando hay infección\n- Indicaciones de cuidado en casa y control de la cicatrización\n\n**¿Qué tipo de heridas se atienden?**\n- Heridas después de una cirugía o de un drenaje de absceso\n- Úlceras en pies de personas con diabetes o úlceras venosas en las piernas\n- Quemaduras leves de primer y segundo grado superficial\n- Raspones y heridas por caídas o accidentes de trabajo\n- Heridas que llevan más de 2 semanas sin cerrar\n- Retiro de puntos y grapas\n\n**¿Cómo es la visita paso a paso?**\n1. Se retira el vendaje anterior y se examina la herida.\n2. Se lava con solución estéril y se retira el tejido que no cicatriza.\n3. Se aplica el apósito indicado y se cubre con un vendaje.\n4. Se programa el siguiente cambio y se explican los cuidados en casa.\n\n**¿Cada cuánto se cambia el vendaje?**\nDepende de la herida: las que drenan mucho pueden requerir cambio diario, y las limpias cada 2 o 3 días. Las úlceras del pie diabético se revisan al menos una vez por semana. El médico define la frecuencia en la primera visita.\n\n**¿Cómo cuido la herida en casa?**\n- Lávate las manos antes de tocar la herida o el vendaje\n- Mantén el vendaje seco; si se moja o se ensucia, cámbialo o acude a la clínica\n- No apliques alcohol, agua oxigenada ni remedios caseros, porque dañan el tejido nuevo\n- Come suficientes proteínas y controla la glucosa si tienes diabetes\n- Evita apoyar peso sobre una úlcera del pie\n\n**¿Cuáles son los signos de infección?**\nEnrojecimiento que se extiende más de 2 centímetros del borde, calor, hinchazón, pus o mal olor, dolor que aumenta, fiebre o líneas rojas que suben por la piel. Con cualquiera de ellos, acude el mismo día.\n\n**¿Cuánto tarda en sanar una herida?**\nUna herida limpia y superficial cierra en 1 a 2 semanas. Las úlceras y las heridas en personas con diabetes o mala circulación pueden tardar de 4 a 12 semanas y necesitan seguimiento constante. Si no mejora en 4 semanas, se evalúan causas como infección profunda o problemas de circulación.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 wound care includes cleaning, disinfection, dressing changes and follow-up until healing, including post-surgical wounds, ulcers and minor burns. Care in Spanish, with no appointment and no insurance needed, in northwest Houston.\n\n**What does wound care include?**\n- Wound evaluation: size, depth, tissue and signs of infection\n- Cleaning with sterile solution and removal of dead tissue when needed\n- Application of dressings and bandages suited to the type of wound\n- Scheduled dressing changes at the clinic\n- Antibiotic prescription when there is infection\n- Home-care instructions and healing follow-up\n\n**Which wounds are treated?**\n- Wounds after surgery or after abscess drainage\n- Foot ulcers in people with diabetes or venous leg ulcers\n- Minor first-degree and superficial second-degree burns\n- Scrapes and wounds from falls or work accidents\n- Wounds that have not closed after 2 weeks\n- Removal of stitches and staples\n\n**What is the visit like, step by step?**\n1. The previous dressing is removed and the wound is examined.\n2. It is washed with sterile solution and non-healing tissue is removed.\n3. The prescribed dressing is applied and covered with a bandage.\n4. The next change is scheduled and home care is explained.\n\n**How often is the dressing changed?**\nIt depends on the wound: those that drain a lot may need daily changes, and clean ones every 2 or 3 days. Diabetic foot ulcers are checked at least once a week. The doctor sets the frequency at the first visit.\n\n**How do I care for the wound at home?**\n- Wash your hands before touching the wound or the dressing\n- Keep the dressing dry; if it gets wet or dirty, change it or come to the clinic\n- Do not apply alcohol, hydrogen peroxide or home remedies, because they damage new tissue\n- Eat enough protein and control your glucose if you have diabetes\n- Avoid putting weight on a foot ulcer\n\n**What are the signs of infection?**\nRedness spreading more than 2 centimeters from the edge, warmth, swelling, pus or foul odor, increasing pain, fever or red streaks going up the skin. With any of these, come in the same day.\n\n**How long does a wound take to heal?**\nA clean, shallow wound closes in 1 to 2 weeks. Ulcers and wounds in people with diabetes or poor circulation can take 4 to 12 weeks and need constant follow-up. If there is no improvement in 4 weeks, causes such as deep infection or circulation problems are evaluated.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 25,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Cirugías menores en Houston, TX: lunares, quistes y lipomas. Procedimiento ambulatorio en español, con precios accesibles.",
    "descriptionEn": "Minor surgery in Houston, TX: moles, cysts and lipomas. Outpatient procedure in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 se realizan cirugías menores ambulatorias con anestesia local, como el retiro de lunares, quistes y lipomas, en una sola visita y con atención en español. Sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué procedimientos se realizan?**\n- Retiro de lunares y lesiones de la piel\n- Extracción de quistes sebáceos y epidermoides\n- Extracción de lipomas, los bultos de grasa bajo la piel\n- Retiro de verrugas y acrocordones (pequeños colgajos de piel)\n- Biopsia de lesiones sospechosas, con envío al laboratorio de patología\n- Retiro de cuerpos extraños superficiales, como astillas o vidrio\n\n**¿Cuándo conviene retirar un lunar o un bulto?**\n- Un lunar que cambia de tamaño, color o forma, tiene bordes irregulares, mide más de 6 milímetros, sangra o pica: las señales ABCDE\n- Un quiste que se inflama, duele o se infecta de forma repetida\n- Un lipoma que crece, molesta con la ropa o el movimiento\n- Cualquier lesión que el médico considere necesario analizar\n\n**¿Cómo es el procedimiento paso a paso?**\n1. El médico examina la lesión y, si es necesario, la evalúa con ultrasonido en la clínica.\n2. Se limpia la piel y se aplica anestesia local; después del pinchazo no sentirás dolor, solo presión.\n3. Se retira la lesión completa con un margen de piel sana.\n4. Se cierra con puntos y se cubre con un vendaje.\n5. La lesión se envía a patología cuando hay sospecha, y el resultado tarda de 1 a 2 semanas.\nEl procedimiento suele tomar entre 20 y 45 minutos.\n\n**¿Cómo cuido la herida después?**\n- Mantén el vendaje seco durante 24 a 48 horas\n- Evita ejercicio intenso y estirar la zona durante una semana\n- Toma el analgésico indicado si hay molestia\n- Los puntos se retiran en la clínica entre 7 y 14 días después, según la zona\n- Acude si hay sangrado que no cede, pus, fiebre o dolor que aumenta\n\n**¿Queda cicatriz?**\nToda incisión deja una marca, que se hace más fina y clara en 6 a 12 meses. Protegerla del sol y no retirar las costras ayuda a que sea menos visible.\n\n**¿Qué casos no se operan en la clínica?**\nLesiones muy grandes o profundas, lesiones en el párpado o cerca de nervios importantes, y tumores que requieren cirugía mayor se refieren a un cirujano o dermatólogo.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 minor outpatient surgery is performed under local anesthesia, such as removal of moles, cysts and lipomas, in a single visit and with care in Spanish. No appointment and no insurance needed, in northwest Houston.\n\n**Which procedures are performed?**\n- Removal of moles and skin lesions\n- Excision of sebaceous and epidermoid cysts\n- Removal of lipomas, the fatty lumps under the skin\n- Removal of warts and skin tags\n- Biopsy of suspicious lesions, sent to the pathology lab\n- Removal of superficial foreign bodies, such as splinters or glass\n\n**When should a mole or lump be removed?**\n- A mole that changes in size, color or shape, has irregular borders, measures more than 6 millimeters, bleeds or itches: the ABCDE signs\n- A cyst that becomes inflamed, hurts or gets infected repeatedly\n- A lipoma that grows or bothers you with clothing or movement\n- Any lesion the doctor considers necessary to analyze\n\n**What is the procedure, step by step?**\n1. The doctor examines the lesion and, if needed, evaluates it with in-clinic ultrasound.\n2. The skin is cleaned and local anesthesia is applied; after the pinch you feel no pain, only pressure.\n3. The entire lesion is removed with a margin of healthy skin.\n4. The wound is closed with stitches and covered with a bandage.\n5. The lesion is sent to pathology when there is suspicion, and the result takes 1 to 2 weeks.\nThe procedure usually takes 20 to 45 minutes.\n\n**How do I care for the wound afterward?**\n- Keep the bandage dry for 24 to 48 hours\n- Avoid intense exercise and stretching the area for a week\n- Take the prescribed pain reliever if there is discomfort\n- Stitches are removed at the clinic 7 to 14 days later, depending on the area\n- Come in if there is bleeding that does not stop, pus, fever or increasing pain\n\n**Will there be a scar?**\nEvery incision leaves a mark, which becomes thinner and lighter over 6 to 12 months. Protecting it from the sun and not picking at scabs helps it be less visible.\n\n**Which cases are not operated on at the clinic?**\nVery large or deep lesions, lesions on the eyelid or near major nerves, and tumors requiring major surgery are referred to a surgeon or dermatologist.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 26,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Drenaje de abscesos en Houston, TX. Tratamiento de infecciones de piel en español, con precios accesibles.",
    "descriptionEn": "Abscess drainage in Houston, TX. Treatment of skin infections in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 los abscesos de la piel se drenan con anestesia local en la misma visita, con limpieza, curación y receta cuando se requiere. Atención en español, sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el servicio?**\n- Evaluación del absceso y de la piel alrededor\n- Ultrasonido en la clínica cuando hay duda de si el bulto tiene pus\n- Anestesia local\n- Incisión y drenaje del pus, con lavado de la cavidad\n- Colocación de gasa dentro de la herida (empaquetado) cuando el absceso es grande\n- Receta de antibiótico cuando hay infección de la piel alrededor, fiebre o riesgo alto\n- Cita de control a los 2 o 3 días y curaciones posteriores\n\n**¿Cómo sé si tengo un absceso?**\nUn bulto rojo, caliente, hinchado y doloroso, que se siente blando o con líquido en el centro, a veces con un punto blanco o amarillo, y en ocasiones con fiebre. Es frecuente en axilas, ingles, glúteos, espalda y cara, y puede empezar como un grano o un folículo infectado.\n\n**¿Por qué no debo exprimirlo en casa?**\nExprimir o pinchar un absceso empuja la infección hacia el tejido profundo y la sangre, y suele empeorarlo. El drenaje en la clínica se hace con anestesia, instrumentos estériles y una incisión que permite que salga todo el pus.\n\n**¿Cómo es el procedimiento paso a paso?**\n1. Se limpia la piel y se aplica anestesia local alrededor del absceso.\n2. Se hace una pequeña incisión y se drena el pus por completo.\n3. Se lava la cavidad con solución estéril y, si es grande, se coloca una gasa dentro.\n4. Se cubre con un vendaje y se explica el cuidado en casa.\nEl alivio del dolor es casi inmediato al liberar la presión. El procedimiento toma unos 15 a 30 minutos.\n\n**¿Cómo cuido la herida después?**\n- Cambia el vendaje según se indique y mantén la zona limpia\n- Regresa a los 2 o 3 días para retirar o cambiar la gasa interna\n- Aplica compresas tibias 3 veces al día para favorecer el drenaje\n- Toma el antibiótico completo si te lo recetaron\n- La herida no se cierra con puntos: sana desde adentro en 1 a 2 semanas\n\n**¿Cuándo se necesita antibiótico?**\nNo siempre. El drenaje es el tratamiento principal. Se receta antibiótico cuando la piel alrededor está infectada (celulitis), hay fiebre, el absceso es mayor de 5 centímetros, hay varios abscesos o tienes diabetes o defensas bajas.\n\n**¿Cuándo ir a urgencias?**\nAbscesos en la cara cerca de los ojos o la nariz, en el cuello, en la zona genital o rectal con dolor intenso, fiebre alta con escalofríos, o enrojecimiento que avanza rápido requieren atención de emergencia.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 skin abscesses are drained under local anesthesia in the same visit, with cleaning, wound care and a prescription when needed. Care in Spanish, with no appointment and no insurance needed, in northwest Houston.\n\n**What does the service include?**\n- Evaluation of the abscess and the surrounding skin\n- In-clinic ultrasound when it is unclear whether the lump contains pus\n- Local anesthesia\n- Incision and drainage of the pus, with washing of the cavity\n- Gauze packing inside the wound when the abscess is large\n- Antibiotic prescription when the surrounding skin is infected, there is fever or high risk\n- Follow-up visit in 2 or 3 days and later dressing changes\n\n**How do I know if I have an abscess?**\nA red, warm, swollen, painful lump that feels soft or fluid-filled in the center, sometimes with a white or yellow point, and occasionally with fever. It is common in the armpits, groin, buttocks, back and face, and may start as a pimple or an infected hair follicle.\n\n**Why shouldn't I squeeze it at home?**\nSqueezing or piercing an abscess pushes the infection into deeper tissue and the bloodstream, and usually makes it worse. Drainage at the clinic is done with anesthesia, sterile instruments and an incision that lets all the pus out.\n\n**What is the procedure, step by step?**\n1. The skin is cleaned and local anesthesia is applied around the abscess.\n2. A small incision is made and the pus is drained completely.\n3. The cavity is washed with sterile solution and, if large, gauze is packed inside.\n4. It is covered with a bandage and home care is explained.\nPain relief is almost immediate once the pressure is released. The procedure takes about 15 to 30 minutes.\n\n**How do I care for the wound afterward?**\n- Change the bandage as instructed and keep the area clean\n- Return in 2 or 3 days to remove or change the internal gauze\n- Apply warm compresses 3 times a day to help drainage\n- Take the full antibiotic course if one was prescribed\n- The wound is not closed with stitches: it heals from the inside in 1 to 2 weeks\n\n**When are antibiotics needed?**\nNot always. Drainage is the main treatment. Antibiotics are prescribed when the surrounding skin is infected (cellulitis), there is fever, the abscess is larger than 5 centimeters, there are several abscesses, or you have diabetes or a weak immune system.\n\n**When should I go to the ER?**\nAbscesses on the face near the eyes or nose, on the neck, in the genital or rectal area with severe pain, high fever with chills, or redness spreading quickly need emergency care.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 27,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Extracción de uñas encarnadas en Houston, TX. Procedimiento con anestesia local en español, con precios accesibles.",
    "descriptionEn": "Ingrown toenail removal in Houston, TX. Procedure with local anesthesia in Spanish, with affordable pricing.",
    "longDescription": "En Clínica Hispana Familiar 529 la uña encarnada se trata con un procedimiento con anestesia local que retira la porción de uña clavada en la piel, con alivio el mismo día. Atención en español, sin cita previa y sin seguro médico, en el noroeste de Houston.\n\n**¿Qué incluye el tratamiento?**\n- Evaluación del dedo, de la infección y de la circulación, sobre todo en personas con diabetes\n- Anestesia local en la base del dedo\n- Retiro de la porción lateral de la uña encarnada (avulsión parcial)\n- Limpieza y drenaje si hay pus\n- Receta de antibiótico cuando hay infección\n- Vendaje e indicaciones de cuidado para evitar que vuelva a encarnarse\n\n**¿Cuáles son los síntomas de una uña encarnada?**\n- Dolor en el borde de la uña, sobre todo del dedo gordo, que aumenta con el zapato\n- Enrojecimiento e hinchazón de la piel junto a la uña\n- Pus o líquido, y a veces un tejido rojizo que crece sobre la uña\n- En casos avanzados, fiebre o dolor que impide caminar\n\n**¿Cuándo se puede tratar en casa y cuándo en la clínica?**\nEn una etapa temprana, sin pus, pueden ayudar los baños de agua tibia con sal 2 o 3 veces al día durante 15 minutos, zapatos abiertos y no cortar más la uña. Si hay pus, dolor intenso, la piel crece sobre la uña, el problema se repite o tienes diabetes, se necesita el procedimiento en la clínica.\n\n**¿Cómo es el procedimiento paso a paso?**\n1. Se limpia el dedo y se aplica anestesia local en la base; en unos minutos el dedo queda dormido.\n2. Se levanta y se corta la franja lateral de la uña que está clavada y se retira desde la raíz.\n3. Se limpia la zona y se drena la infección si la hay.\n4. Se coloca un vendaje con pomada antibiótica.\nEl procedimiento toma entre 15 y 30 minutos y puedes caminar al salir, con zapato abierto.\n\n**¿Cómo cuido el dedo después?**\n- Mantén el pie elevado el resto del día y toma el analgésico indicado\n- Cambia el vendaje a las 24 horas y después lava con agua y jabón a diario\n- Usa sandalias o zapatos abiertos durante una semana\n- La uña vuelve a crecer en varios meses; corta siempre recta, sin redondear las esquinas\n- Acude si hay sangrado que no cede, enrojecimiento que crece, pus o fiebre\n\n**¿Cómo evitar que vuelva a encarnarse?**\nCorta las uñas rectas y no demasiado cortas, usa zapatos con espacio para los dedos, evita arrancar los bordes y mantén los pies secos. Si se repite varias veces, existe un procedimiento que destruye la raíz de ese borde para que no vuelva a crecer, al que el médico puede referirte.\n\n**¿Por qué es importante en personas con diabetes?**\nCon diabetes o mala circulación, una uña encarnada infectada puede convertirse en una úlcera. No la trates en casa: acude a la clínica desde los primeros síntomas.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "At Clínica Hispana Familiar 529 an ingrown toenail is treated with a procedure under local anesthesia that removes the portion of nail digging into the skin, with relief the same day. Care in Spanish, with no appointment and no insurance needed, in northwest Houston.\n\n**What does the treatment include?**\n- Evaluation of the toe, the infection and circulation, especially in people with diabetes\n- Local anesthesia at the base of the toe\n- Removal of the ingrown side portion of the nail (partial avulsion)\n- Cleaning and drainage if there is pus\n- Antibiotic prescription when there is infection\n- Bandage and care instructions to prevent it from growing back in\n\n**What are the symptoms of an ingrown toenail?**\n- Pain at the edge of the nail, usually the big toe, that gets worse with shoes\n- Redness and swelling of the skin next to the nail\n- Pus or fluid, and sometimes reddish tissue growing over the nail\n- In advanced cases, fever or pain that makes walking difficult\n\n**When can it be treated at home and when at the clinic?**\nAt an early stage, without pus, warm salt-water soaks 2 or 3 times a day for 15 minutes, open shoes and not cutting the nail further can help. If there is pus, severe pain, skin growing over the nail, the problem keeps coming back or you have diabetes, the procedure at the clinic is needed.\n\n**What is the procedure, step by step?**\n1. The toe is cleaned and local anesthesia is applied at the base; within minutes the toe is numb.\n2. The side strip of nail that is digging in is lifted, cut and removed from the root.\n3. The area is cleaned and any infection is drained.\n4. A bandage with antibiotic ointment is applied.\nThe procedure takes 15 to 30 minutes and you can walk out in an open shoe.\n\n**How do I care for the toe afterward?**\n- Keep your foot elevated the rest of the day and take the prescribed pain reliever\n- Change the bandage after 24 hours and then wash daily with soap and water\n- Wear sandals or open shoes for a week\n- The nail grows back over several months; always cut it straight, without rounding the corners\n- Come in if there is bleeding that does not stop, spreading redness, pus or fever\n\n**How do I keep it from growing back in?**\nCut nails straight and not too short, wear shoes with room for your toes, avoid tearing the edges and keep your feet dry. If it recurs several times, there is a procedure that destroys the root of that edge so it does not grow back, which the doctor can refer you for.\n\n**Why does it matter for people with diabetes?**\nWith diabetes or poor circulation, an infected ingrown toenail can turn into an ulcer. Do not treat it at home: come to the clinic at the first symptoms.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 28,
    "updatedAt": "2026-09-05"
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Farmacia en Houston, TX dentro de la clínica. Surtimos tu receta al terminar la consulta, atención en español.",
    "descriptionEn": "Pharmacy in Houston, TX inside the clinic. We fill your prescription right after your visit, service in Spanish.",
    "longDescription": "Clínica Hispana Familiar 529 cuenta con farmacia dentro de la clínica: al terminar la consulta puedes surtir tu receta en el mismo lugar, con medicamentos de marca y genéricos, productos de venta libre y asesoría en español. Sin seguro médico, con pago directo, en el noroeste de Houston, en el mismo horario de la clínica.\n\n**¿Qué ofrece la farmacia de la clínica?**\n- Surtido de la receta del médico de la clínica al terminar la consulta\n- Medicamentos genéricos y de marca: antibióticos, antihipertensivos, medicamentos para diabetes, antialérgicos, analgésicos y más\n- Productos de venta libre para gripe, tos, dolor, alergias, estómago y vitaminas\n- Anticonceptivos recetados en la consulta\n- Resurtido de recetas de tratamientos crónicos\n- Explicación en español de la dosis, el horario y las precauciones de cada medicamento\n\n**¿Por qué surtir la receta en la clínica?**\nResuelves todo en una sola visita: el médico te atiende, te receta y sales con el tratamiento en la mano, sin ir a otra farmacia ni esperar. El personal conoce tu consulta y puede aclarar cualquier duda con el médico en el momento.\n\n**¿Cómo funciona paso a paso?**\n1. El médico te entrega la receta al terminar la consulta.\n2. Pasas a la farmacia dentro de la clínica y entregas la receta.\n3. Se prepara el medicamento y se te explica cómo tomarlo, cuántos días y qué evitar.\n4. Pagas en el mismo lugar, en efectivo o con tarjeta.\n\n**¿Cómo funciona el pago?**\nLos medicamentos son de pago directo, con precios accesibles y con la opción de genéricos, que tienen el mismo principio activo que los de marca a menor costo. No se requiere seguro médico. Pregunta el precio antes de surtir.\n\n**¿Qué debo saber sobre mis medicamentos?**\n- Completa el tratamiento aunque te sientas mejor, sobre todo con antibióticos\n- Informa al médico de todos los medicamentos y suplementos que tomas para evitar interacciones\n- Guarda los medicamentos en un lugar fresco y seco, fuera del alcance de los niños\n- No compartas medicamentos recetados con otras personas\n- Si tienes efectos secundarios, llama a la clínica antes de suspender\n\n**¿Puedo surtir una receta de otro médico?**\nLa farmacia surte principalmente las recetas de los médicos de la clínica. Si tienes una receta de otro proveedor, llama para confirmar si el medicamento está disponible.\n\n**¿Cuál es el horario de la farmacia?**\nEl mismo de la clínica: lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM.\n\n**¿Cómo funciona el pago?**\nNo necesitas seguro médico. Los precios son de pago directo, se aceptan efectivo y tarjetas, y puedes preguntar el costo del servicio por teléfono o WhatsApp antes de tu visita.\n\n**¿Dónde está la clínica y qué zonas atiende?**\nClínica Hispana Familiar 529 está en 15003 FM 529 B, Houston, TX 77095, en el noroeste de Houston. El horario es de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM, sin cita previa. Atiende a pacientes de Copperfield, Bear Creek, Cypress, Jersey Village, Katy y comunidades cercanas.",
    "longDescriptionEn": "Clínica Hispana Familiar 529 has a pharmacy inside the clinic: when your visit ends you can fill your prescription in the same place, with brand-name and generic medications, over-the-counter products and guidance in Spanish. No insurance needed, self-pay, in northwest Houston, during the same hours as the clinic.\n\n**What does the clinic pharmacy offer?**\n- Filling of the clinic doctor's prescription right after your visit\n- Generic and brand-name medications: antibiotics, blood pressure medication, diabetes medication, allergy medication, pain relievers and more\n- Over-the-counter products for colds, cough, pain, allergies, stomach and vitamins\n- Contraceptives prescribed during the visit\n- Refills of prescriptions for chronic treatments\n- Explanation in Spanish of the dose, schedule and precautions for each medication\n\n**Why fill your prescription at the clinic?**\nYou get everything done in a single visit: the doctor sees you, writes the prescription and you leave with the treatment in hand, without going to another pharmacy or waiting. The staff know your visit and can clear up any question with the doctor on the spot.\n\n**How does it work, step by step?**\n1. The doctor hands you the prescription at the end of the visit.\n2. You go to the pharmacy inside the clinic and hand in the prescription.\n3. The medication is prepared and you are told how to take it, for how many days and what to avoid.\n4. You pay in the same place, in cash or by card.\n\n**How does payment work?**\nMedications are self-pay, with affordable prices and the option of generics, which have the same active ingredient as brand-name drugs at a lower cost. No health insurance is required. Ask for the price before filling.\n\n**What should I know about my medications?**\n- Complete the treatment even if you feel better, especially with antibiotics\n- Tell the doctor about all the medications and supplements you take to avoid interactions\n- Store medications in a cool, dry place, out of reach of children\n- Do not share prescription medications with other people\n- If you have side effects, call the clinic before stopping\n\n**Can I fill a prescription from another doctor?**\nThe pharmacy mainly fills prescriptions from the clinic's doctors. If you have a prescription from another provider, call to confirm whether the medication is available.\n\n**What are the pharmacy hours?**\nThe same as the clinic: Monday through Saturday 9 AM to 9 PM and Sunday 9 AM to 5 PM.\n\n**How does payment work?**\nYou don't need health insurance. Pricing is self-pay, cash and cards are accepted, and you can ask for the cost of the service by phone or WhatsApp before your visit.\n\n**Where is the clinic and which areas does it serve?**\nClínica Hispana Familiar 529 is at 15003 FM 529 B, Houston, TX 77095, in northwest Houston. Hours are Monday through Saturday from 9 AM to 9 PM and Sunday from 9 AM to 5 PM, walk-ins welcome. It serves patients from Copperfield, Bear Creek, Cypress, Jersey Village, Katy and nearby communities.",
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
    "order": 29,
    "updatedAt": "2026-09-05"
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

