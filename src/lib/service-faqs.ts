interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    "faqs": [
      {
        "question": "¿Qué revisan en la primera consulta de diabetes, presión o colesterol?",
        "answer": "En esa primera visita el equipo médico toma tu historial, la presión arterial, el peso y el índice de masa corporal, y pide glucosa, hemoglobina A1c, perfil de lípidos y función de riñón e hígado para clasificar tu condición."
      },
      {
        "question": "¿Qué llevo si ya tomo pastillas para la presión o el azúcar?",
        "answer": "Trae los frascos o una lista con cada dosis, tu registro de glucosa o de presión si lo mides en casa y los análisis que te hayan hecho antes. Si van a medir glucosa y colesterol, llega en ayunas; el agua sí está permitida."
      },
      {
        "question": "¿Me pueden cambiar la dosis si mis números no bajan?",
        "answer": "Sí. Con tus resultados de laboratorio, el equipo médico inicia o ajusta los medicamentos y te explica en español un plan de alimentación y actividad física. Las visitas de seguimiento sirven para comprobar si vas llegando a tus metas."
      },
      {
        "question": "¿Qué cifras de azúcar o presión son motivo para no esperar?",
        "answer": "Glucosa por encima de 300 mg/dL, o por debajo de 70 con temblor y sudoración, presión de 180/120 o más, dolor en el pecho, falta de aire, visión borrosa repentina o heridas en los pies que no sanan piden atención inmediata, no una consulta de control."
      },
      {
        "question": "¿Hay un paquete para revisar todo en una sola visita a FM 529?",
        "answer": "La clínica tiene un chequeo general completo y un examen general de sangre con vitaminas. Ambos aparecen en la página de promociones, donde puedes ver qué incluye cada uno antes de venir."
      }
    ],
    "faqsEn": [
      {
        "question": "What is checked at the first visit for diabetes, blood pressure or cholesterol?",
        "answer": "At that first visit the medical team takes your history, blood pressure, weight and body mass index, and orders glucose, hemoglobin A1c, a lipid panel and kidney and liver function to classify your condition."
      },
      {
        "question": "What should I bring if I already take pills for blood pressure or blood sugar?",
        "answer": "Bring the bottles or a list with every dose, your home glucose or blood pressure log if you keep one, and any earlier lab results. If glucose and cholesterol will be drawn, come fasting; water is fine."
      },
      {
        "question": "Can my dose be changed if my numbers are not coming down?",
        "answer": "Yes. Using your lab results, the medical team starts or adjusts your medications and explains a nutrition and activity plan in Spanish. Follow-up visits are there to check whether you are reaching your targets."
      },
      {
        "question": "Which sugar or blood pressure readings mean I should not wait?",
        "answer": "Glucose above 300 mg/dL, or below 70 with shaking and sweating, blood pressure of 180/120 or higher, chest pain, shortness of breath, sudden blurred vision or foot wounds that will not heal call for immediate care, not a routine follow-up."
      },
      {
        "question": "Is there a package to check everything in one visit to the FM 529 clinic?",
        "answer": "The clinic offers a complete general checkup and a general blood test with vitamins. Both are on the promotions page, where you can see what each one includes before you come in."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Qué pruebas incluye la revisión de tiroides?",
        "answer": "Se miden TSH, T4 libre y T3 en sangre, junto con una revisión de tus síntomas y del cuello. Con esos datos el equipo médico define si hay hipotiroidismo o hipertiroidismo y si conviene empezar o ajustar el tratamiento."
      },
      {
        "question": "¿Tengo que venir en ayunas a la prueba de tiroides?",
        "answer": "No, la TSH no requiere ayuno, así que puedes venir a cualquier hora del horario de la clínica. Trae la lista de tus medicamentos, incluidos calcio, hierro o antiácidos, para que el equipo médico la revise contigo."
      },
      {
        "question": "¿Qué cuidados lleva la levotiroxina?",
        "answer": "Tómala con el estómago vacío, un rato antes de desayunar, y deja al menos 4 horas entre ella y el calcio, el hierro o los antiácidos. No la suspendas aunque te sientas bien, y si quedas embarazada avisa al equipo médico, porque la dosis suele aumentar."
      },
      {
        "question": "¿Hacen ultrasonido si notan un bulto en el cuello?",
        "answer": "Sí. La clínica tiene ultrasonido de tiroides para ver el tamaño de la glándula y si hay nódulos. Se indica cuando la revisión del cuello o los análisis lo justifican, y los hallazgos se te explican en español."
      },
      {
        "question": "¿Qué síntomas de tiroides son una emergencia?",
        "answer": "Palpitaciones muy rápidas con fiebre y confusión, o somnolencia extrema con temperatura baja. Son poco frecuentes, pero requieren ir a urgencias en lugar de esperar una consulta en la clínica."
      }
    ],
    "faqsEn": [
      {
        "question": "Which tests are part of the thyroid check?",
        "answer": "TSH, free T4 and T3 are measured in blood, along with a review of your symptoms and a neck exam. With that, the medical team determines whether there is hypothyroidism or hyperthyroidism and whether to start or adjust treatment."
      },
      {
        "question": "Can I eat breakfast before my thyroid blood draw?",
        "answer": "Yes. TSH does not require fasting, so you can come at any time the clinic is open. Bring your medication list, including calcium, iron or antacids, so the medical team can go over it with you."
      },
      {
        "question": "What should I keep in mind with levothyroxine?",
        "answer": "Take it on an empty stomach before breakfast, at least 4 hours apart from calcium, iron and antacids. Do not stop it even if you feel well, and if you become pregnant tell the medical team, since the dose usually goes up."
      },
      {
        "question": "Do you do an ultrasound if a lump is found in the neck?",
        "answer": "Yes. The clinic has thyroid ultrasound to see the size of the gland and whether there are nodules. It is ordered when the neck exam or the labs call for it, and the findings are explained to you in Spanish."
      },
      {
        "question": "Which thyroid symptoms are an emergency?",
        "answer": "Very fast palpitations with fever and confusion, or extreme drowsiness with a low body temperature. They are rare, but they need the emergency room rather than waiting for a clinic visit."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Qué revisan en la consulta de alergias?",
        "answer": "Se pregunta en qué época aparecen tus síntomas y qué los dispara, y se revisan nariz, garganta, oídos, pulmones y piel. Con eso se arma el tratamiento para rinitis, ronchas, eczema o dermatitis y un plan para reducir la exposición."
      },
      {
        "question": "¿Por qué estornudo cada primavera en Cypress y no me da fiebre?",
        "answer": "Ese patrón apunta a alergia: estornudos en serie, comezón en nariz, ojos y garganta, moco claro y ojos llorosos sin fiebre, mientras dura la exposición. En Houston el polen de roble y otros árboles abunda de febrero a mayo."
      },
      {
        "question": "¿Qué tratamiento me pueden indicar para la nariz, los ojos o la piel?",
        "answer": "Para la nariz, un antihistamínico que no da sueño y un aerosol nasal de esteroide si hay congestión; para los ojos, gotas; para la piel, cremas y, en ronchas, antihistamínicos por varios días. Luego se revisa cómo respondiste y se ajusta."
      },
      {
        "question": "¿Me hacen pruebas de alergia en la piel?",
        "answer": "Cuando se necesitan pruebas cutáneas o inmunoterapia, el equipo médico te da la referencia a un especialista en alergias. Mientras tanto puedes empezar el tratamiento de los síntomas en la clínica."
      },
      {
        "question": "¿Cuándo una reacción alérgica es para llamar al 911?",
        "answer": "Si después de comer algo, de una picadura o de tomar un medicamento se te hinchan los labios, la lengua o la garganta, te falta el aire, te mareas o las ronchas avanzan rápido, puede ser anafilaxia. En ese caso llama al 911 en vez de venir a la clínica."
      }
    ],
    "faqsEn": [
      {
        "question": "What is checked at the allergy visit?",
        "answer": "You are asked when your symptoms show up and what sets them off, and your nose, throat, ears, lungs and skin are examined. That shapes the treatment for rhinitis, hives, eczema or dermatitis and a plan to cut down exposure."
      },
      {
        "question": "Why do I sneeze every spring in Cypress without running a fever?",
        "answer": "That pattern points to allergy: sneezing fits, itchy nose, eyes and throat, clear mucus and watery eyes with no fever, lasting as long as the exposure. In Houston, oak and other tree pollen is heavy from February to May."
      },
      {
        "question": "What treatment can I get for my nose, eyes or skin?",
        "answer": "For the nose, a non-drowsy antihistamine plus a steroid nasal spray if you are congested; for the eyes, drops; for the skin, creams and, for hives, antihistamines for several days. Your response is reviewed afterward and adjusted."
      },
      {
        "question": "Do you do allergy skin testing?",
        "answer": "When skin testing or immunotherapy is needed, the medical team refers you to an allergy specialist. In the meantime you can start treatment for your symptoms at the clinic."
      },
      {
        "question": "When is an allergic reaction a reason to call 911?",
        "answer": "If your lips, tongue or throat swell, you struggle to breathe, feel dizzy or hives race across your skin after eating something, a sting or a medication, it may be anaphylaxis. In that case call 911 instead of coming to the clinic."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Qué pruebas rápidas hacen si tengo fiebre y tos?",
        "answer": "Hisopado nasal para influenza A y B y prueba rápida de antígeno de COVID-19; si la garganta duele mucho, también la de estreptococo. Son pruebas rápidas y el resultado sale durante la visita, junto con la medición de oxígeno."
      },
      {
        "question": "¿Cuándo conviene venir a hacerme la prueba?",
        "answer": "La de influenza es más precisa en los primeros días de síntomas. La de COVID-19 se puede hacer desde el primer día con síntomas o 5 días después de un contacto cercano; si sale negativa y sigues con síntomas, se repite."
      },
      {
        "question": "¿Me van a dar antiviral o antibiótico?",
        "answer": "Depende del resultado. Los antivirales para la influenza funcionan mejor si se empiezan pronto, y para COVID-19 hay antiviral para personas con factores de riesgo. El antibiótico solo se indica si hay infección bacteriana, no para un resfriado o una bronquitis viral."
      },
      {
        "question": "¿Qué síntomas respiratorios son para urgencias?",
        "answer": "Ve a urgencias si te cuesta respirar, te duele el pecho, tienes los labios azulados o estás confundido, si la fiebre no cede con medicamento o si el oxímetro marca menos de 92%. Un bebé menor de 3 meses con fiebre debe ir directo a urgencias."
      },
      {
        "question": "¿Puedo ponerme la vacuna de la gripe en la clínica?",
        "answer": "Sí, la vacuna anual contra la influenza está disponible en la clínica de FM 529, idealmente entre septiembre y octubre. Si hoy tienes fiebre, conviene esperar a recuperarte antes de aplicarla."
      }
    ],
    "faqsEn": [
      {
        "question": "Which rapid tests do you run if I have a fever and a cough?",
        "answer": "A nasal swab for influenza A and B and a rapid COVID-19 antigen test; if your throat is very sore, a strep test too. They are rapid tests and the result comes back during the visit, along with an oxygen reading."
      },
      {
        "question": "When is the best time to come in for testing?",
        "answer": "The flu test is most accurate in the first days of symptoms. The COVID-19 test can be done from the first day of symptoms or 5 days after a close contact; if it is negative and symptoms continue, it is repeated."
      },
      {
        "question": "Will I get an antiviral or an antibiotic?",
        "answer": "It depends on the result. Flu antivirals work best when started early, and there is a COVID-19 antiviral for people with risk factors. Antibiotics are only given for a bacterial infection, not for a cold or viral bronchitis."
      },
      {
        "question": "Which breathing symptoms mean going to the ER?",
        "answer": "Trouble breathing, chest pain, bluish lips, confusion, a fever that will not come down with medication, or oxygen below 92%. A baby under 3 months with a fever should go straight to the ER."
      },
      {
        "question": "Can I get my flu shot at the clinic?",
        "answer": "Yes, the annual flu vaccine is available at the FM 529 clinic, ideally between September and October. If you have a fever today, it is better to wait until you recover before getting it."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Qué llevo al examen físico de la escuela o de la liga?",
        "answer": "El formulario de la escuela o liga con la sección de historial ya llenada y firmada por el padre o tutor, la cartilla de vacunas, lentes o aparato auditivo si el estudiante los usa y la lista de medicamentos o condiciones como asma."
      },
      {
        "question": "¿Qué le revisan a mi hijo durante el examen?",
        "answer": "Historial médico y familiar, peso, talla, presión arterial, visión y audición, y examen de corazón, pulmones, abdomen, columna y articulaciones. Al final se llena y se firma el formulario que pide la escuela, el distrito o la liga."
      },
      {
        "question": "¿La UIL pide este examen cada año?",
        "answer": "Sí. Para deportes escolares en Texas, la UIL exige el formulario de evaluación previa a la participación cada año en secundaria y preparatoria, antes de la primera práctica. Ligas, campamentos de verano y guarderías usan sus propios formularios."
      },
      {
        "question": "¿Qué pasa si encuentran un soplo o la presión alta?",
        "answer": "Puede pedirse un estudio adicional, como un electrocardiograma que se hace en la clínica, antes de autorizar el deporte. Es una medida de seguridad, no una descalificación automática, y se te explica en español qué sigue."
      },
      {
        "question": "¿Puede venir solo un adolescente después de clases?",
        "answer": "No. Todo estudiante menor de 18 años viene acompañado de su padre, madre o tutor. Pueden llegar juntos sin cita al salir de la escuela, ya que la clínica atiende hasta las 9 PM de lunes a sábado."
      }
    ],
    "faqsEn": [
      {
        "question": "What do I bring to the school or league physical?",
        "answer": "The school or league form with the history section already filled out and signed by the parent or guardian, the vaccination record, glasses or hearing aid if the student uses them, and a list of medications or conditions such as asthma."
      },
      {
        "question": "What does the exam check on my child?",
        "answer": "Medical and family history, weight, height, blood pressure, vision and hearing, plus an exam of the heart, lungs, abdomen, spine and joints. At the end, the form required by the school, district or league is completed and signed."
      },
      {
        "question": "Does the UIL require this physical every year?",
        "answer": "Yes. For school sports in Texas, the UIL requires the pre-participation evaluation form every year in middle and high school, before the first practice. Leagues, summer camps and daycares use their own forms."
      },
      {
        "question": "What happens if a murmur or high blood pressure is found?",
        "answer": "An extra test may be needed, such as an electrocardiogram done at the clinic, before sports clearance. It is a safety step, not an automatic disqualification, and the next steps are explained to you in Spanish."
      },
      {
        "question": "Can a teenager come alone after school?",
        "answer": "No: a parent or guardian must come with anyone under 18. You can walk in together after school, since the clinic sees patients until 9 PM Monday through Saturday."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Qué se atiende en la consulta ginecológica?",
        "answer": "Papanicolaou, cultivo vaginal para hongos, bacterias o tricomonas, tratamiento de infecciones vaginales y evaluación de flujo anormal, comezón, ardor, mal olor o dolor pélvico. También se da la orden de mamografía y la referencia al especialista cuando un resultado lo requiere."
      },
      {
        "question": "¿Cómo me preparo para el Papanicolaou?",
        "answer": "Escoge un día sin sangrado menstrual abundante y evita relaciones, duchas vaginales, tampones y cremas u óvulos durante los dos días previos. Trae tu identificación, tus resultados anteriores si los tienes y la fecha de tu última regla."
      },
      {
        "question": "¿Duele la toma de la muestra?",
        "answer": "Suele causar una leve molestia, no dolor. Se coloca un espéculo y se toman células del cuello uterino con un cepillo suave; si también hace falta un cultivo, se toma en la misma visita y al salir sigues con tu día."
      },
      {
        "question": "¿Debo esperar al chequeo anual si tengo un flujo raro?",
        "answer": "No. Flujo con cambio de color u olor, comezón, ardor, dolor al orinar o en las relaciones, sangrado fuera de la regla o dolor en la parte baja del abdomen son motivos para venir antes, sin cita, cualquier día de la semana."
      },
      {
        "question": "¿Tienen un paquete de chequeo para la mujer?",
        "answer": "Sí. El chequeo completo de la mujer reúne Papanicolaou, examen de orina, orden de mamografía y consulta ginecológica; el detalle está en la página de promociones."
      }
    ],
    "faqsEn": [
      {
        "question": "What is covered in the gynecology visit?",
        "answer": "Pap smear, vaginal culture for yeast, bacteria or trichomonas, treatment of vaginal infections and evaluation of abnormal discharge, itching, burning, odor or pelvic pain. A mammogram order and a specialist referral are given when a result calls for it."
      },
      {
        "question": "How do I prepare for a Pap smear?",
        "answer": "Pick a day without heavy menstrual bleeding and avoid intercourse, douching, tampons and vaginal creams or suppositories for the two days before. Bring your ID, earlier results if you have them and the date of your last period."
      },
      {
        "question": "Does collecting the sample hurt?",
        "answer": "It usually causes mild discomfort, not pain. A speculum is placed and cells are taken from the cervix with a soft brush; if a culture is also needed, it is collected during the same visit and you go on with your day afterward."
      },
      {
        "question": "Should I wait for my annual checkup if my discharge seems off?",
        "answer": "No. Discharge that changes in color or odor, itching, burning, pain when urinating or during sex, bleeding between periods or lower abdominal pain are reasons to come in sooner, as a walk-in, any day of the week."
      },
      {
        "question": "Do you have a women's checkup package?",
        "answer": "Yes. The complete women's checkup combines a Pap smear, urine test, mammogram order and gynecology visit; the details are on the promotions page."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "Tengo un retraso, ¿ya puedo hacerme la prueba?",
        "answer": "Sí: la prueba de orina ya es confiable desde el primer día en que la regla no llega. La de sangre detecta la hormona hCG antes, incluso antes de que falte la menstruación. Con resultado negativo y la regla todavía ausente, vale la pena repetirla más adelante."
      },
      {
        "question": "¿Qué muestra tengo que dar?",
        "answer": "Una muestra de orina que se toma en la clínica; la primera de la mañana es la más concentrada, aunque cualquier hora sirve. Es una prueba rápida y el resultado sale durante la visita. Si hace falta más precisión, se toma también la de sangre."
      },
      {
        "question": "¿Qué sigue si el resultado es positivo?",
        "answer": "El equipo médico confirma el resultado, calcula las semanas y la fecha probable de parto, y te orienta sobre ácido fólico o vitamina prenatal, la primera consulta prenatal y las referencias. La clínica también tiene ultrasonido para confirmar y fechar el embarazo."
      },
      {
        "question": "¿Qué síntomas con prueba positiva necesitan atención urgente?",
        "answer": "Dolor fuerte en un solo lado del abdomen, sangrado abundante o mareo pueden indicar un embarazo ectópico o una pérdida. No esperes a una consulta de rutina: busca atención urgente."
      },
      {
        "question": "¿La prueba es privada?",
        "answer": "Sí. La atención es privada y sin juicios, en español o en inglés, y puedes llegar sin cita a 15003 FM 529 cualquier día de la semana para hacerte la prueba."
      }
    ],
    "faqsEn": [
      {
        "question": "My period is late. Can I test now?",
        "answer": "Yes: a urine test is already reliable on the first day your period fails to show up. The blood test detects the hCG hormone earlier, even before the period is due. With a negative result and still no period, it is worth testing again later."
      },
      {
        "question": "What sample do I need to give?",
        "answer": "A urine sample collected at the clinic; first-morning urine is the most concentrated, though any time works. It is a rapid test and the result comes back during the visit. If more precision is needed, a blood test is drawn too."
      },
      {
        "question": "What comes next if the result is positive?",
        "answer": "The medical team confirms the result, works out the weeks and due date, and guides you on folic acid or a prenatal vitamin, your first prenatal visit and referrals. The clinic also has ultrasound to confirm and date the pregnancy."
      },
      {
        "question": "Which symptoms with a positive test need urgent care?",
        "answer": "Severe pain on one side of the abdomen, heavy bleeding or dizziness may point to an ectopic pregnancy or a loss. Do not wait for a routine visit: get urgent care."
      },
      {
        "question": "Is the test private?",
        "answer": "Yes. Care is private and judgment-free, in Spanish or English, and you can walk in at 15003 FM 529 any day of the week to take the test."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos ofrecen en la clínica?",
        "answer": "Pastillas combinadas o solo de progestina, la inyección anticonceptiva trimestral y el retiro del implante subdérmico si quieres cambiar de método. Para implante, DIU o métodos permanentes se da orientación y referencia."
      },
      {
        "question": "¿Cómo empiezo el método que elija?",
        "answer": "Se revisan tus antecedentes, tu presión arterial y si fumas, y se descarta un embarazo actual. Si empiezas en los primeros 5 días de la regla, la protección es inmediata; si no, usa condón durante 7 días."
      },
      {
        "question": "¿Qué hago si olvidé una pastilla?",
        "answer": "Tómala en cuanto lo recuerdes y sigue con la siguiente a la hora de siempre, aunque te toque tomar dos ese día. Si olvidaste dos o más, usa condón una semana y pregunta si necesitas anticoncepción de emergencia."
      },
      {
        "question": "¿Es normal el sangrado irregular con la pastilla o la inyección?",
        "answer": "En los primeros meses es común el sangrado irregular, la sensibilidad en los senos, náusea leve o cambios de ánimo, y suelen pasar con el uso. La inyección puede quitar la regla, algo que no es dañino."
      },
      {
        "question": "¿Cuándo no me conviene la pastilla combinada?",
        "answer": "Si fumas y tienes más de 35 años, presión alta no controlada, migraña con aura, antecedentes de trombosis o diste a luz hace menos de 6 semanas. En esos casos hay alternativas como la inyección o la pastilla solo de progestina."
      }
    ],
    "faqsEn": [
      {
        "question": "Which birth control methods does the clinic offer?",
        "answer": "Combined or progestin-only pills, the quarterly contraceptive injection, and removal of the arm implant if you want to switch methods. For an implant, IUD or permanent methods you get guidance and a referral."
      },
      {
        "question": "How do I start the method I choose?",
        "answer": "Your history, blood pressure and smoking are reviewed and a current pregnancy is ruled out. If you start within the first 5 days of your period, protection is immediate; otherwise, use condoms for 7 days."
      },
      {
        "question": "I forgot to take one pill. What now?",
        "answer": "Take it as soon as you remember and continue with the next one at your usual time, even if that means two that day. If you missed two or more, use condoms for a week and ask whether you need emergency contraception."
      },
      {
        "question": "Is irregular bleeding normal on the pill or the shot?",
        "answer": "Irregular bleeding, breast tenderness, mild nausea or mood changes are common in the first months and usually fade with use. The shot can stop your period, which is not harmful."
      },
      {
        "question": "When is the combined pill not a good fit for me?",
        "answer": "If you smoke and are over 35, have uncontrolled high blood pressure, migraine with aura, a history of blood clots, or gave birth less than 6 weeks ago. In those cases there are alternatives such as the shot or the progestin-only pill."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Cuándo debo quitarme el implante del brazo?",
        "answer": "El implante subdérmico está aprobado para 3 años; después se retira o se cambia. También puedes quitarlo antes si quieres embarazarte, cambiar de método o tienes efectos que no toleras, como sangrado irregular persistente."
      },
      {
        "question": "¿Cómo es el retiro del implante?",
        "answer": "Se localiza en la parte interna del brazo, se aplica anestesia local con un pequeño pinchazo, se hace una incisión de 2 a 3 milímetros y se saca con una pinza. Se cierra con vendaje adhesivo, sin puntos, y venda compresiva."
      },
      {
        "question": "¿Cómo cuido el brazo después del retiro?",
        "answer": "Deja la venda compresiva el tiempo que se te indique para evitar moretones y mantén la zona limpia y seca unos días. Es normal ver un moretón y sentir el brazo algo adolorido; vuelve a la clínica si lo rojo se extiende, sale pus, te da fiebre o el dolor va en aumento."
      },
      {
        "question": "¿Puedo salir de la consulta con otro método?",
        "answer": "Sí. La ovulación puede volver pronto después del retiro, así que, si no deseas embarazarte, en la misma consulta se puede indicar la pastilla o aplicar la inyección anticonceptiva."
      },
      {
        "question": "¿Y si al palpar el brazo no encuentran el implante?",
        "answer": "No se intenta sacar a ciegas. Se indica un estudio de imagen para ubicarlo y se refiere a un especialista para hacer el retiro guiado."
      }
    ],
    "faqsEn": [
      {
        "question": "When should my arm implant come out?",
        "answer": "The subdermal implant is approved for 3 years; after that it is removed or replaced. You can also take it out earlier if you want to get pregnant, switch methods or have side effects you cannot tolerate, such as ongoing irregular bleeding."
      },
      {
        "question": "What is implant removal like?",
        "answer": "It is located on the inner arm, local anesthesia is given with a small pinch, a 2 to 3 millimeter incision is made and it is pulled out with forceps. The site is closed with an adhesive strip, no stitches, plus a pressure bandage."
      },
      {
        "question": "How do I care for my arm after removal?",
        "answer": "Keep the pressure bandage on as long as you are told to avoid bruising, and keep the area clean and dry for a few days. A bruise and mild soreness are normal; come back for spreading redness, pus, fever or worsening pain."
      },
      {
        "question": "Can I leave the visit with another method?",
        "answer": "Yes. Ovulation can return soon after removal, so if you do not want to get pregnant, the pill can be started or the contraceptive shot given during the same visit."
      },
      {
        "question": "What if the implant cannot be felt?",
        "answer": "It is never removed blindly. An imaging study is ordered to locate it and you are referred to a specialist for a guided removal."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Qué incluye el chequeo de salud del hombre?",
        "answer": "Examen de próstata en sangre (PSA), análisis hormonal, presión arterial, peso y signos vitales, examen de orina y una conversación sobre síntomas urinarios, de energía o de ánimo. Si un resultado lo requiere, se hace la referencia al especialista."
      },
      {
        "question": "¿Cómo me preparo para el PSA?",
        "answer": "Evita eyacular durante los dos días previos, porque puede elevar el resultado. Si tuviste una infección urinaria o de próstata reciente, termina antes el tratamiento. Trae tu lista de medicamentos: algunos para la próstata cambian el valor."
      },
      {
        "question": "¿A qué hora conviene el análisis hormonal?",
        "answer": "Por la mañana, cuando el nivel está más alto. La clínica abre a las 9 AM todos los días, así que lo práctico es llegar a primera hora y aprovechar para hacer el PSA en la misma extracción."
      },
      {
        "question": "¿Un PSA alto quiere decir cáncer?",
        "answer": "No necesariamente. Puede deberse a una próstata agrandada, a inflamación o a una infección. El equipo médico valora el resultado según tu edad y tus síntomas, puede repetir la prueba y, si hace falta, te refiere al especialista."
      },
      {
        "question": "¿A qué edad empiezo a revisarme la próstata?",
        "answer": "Según las guías de Estados Unidos, la conversación sobre el PSA toca entre los 55 y los 69 años; adelántala a los 45 si tu padre o un hermano tuvo cáncer de próstata o si eres afroamericano. Con síntomas urinarios se revisa a cualquier edad."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the men's health checkup include?",
        "answer": "A prostate blood test (PSA), a hormone panel, blood pressure, weight and vital signs, a urine test and a talk about urinary, energy or mood symptoms. If a result calls for it, you are referred to a specialist."
      },
      {
        "question": "How do I prepare for the PSA test?",
        "answer": "Avoid ejaculation for the two days before, since it can raise the result. If you recently had a urinary or prostate infection, finish the treatment first. Bring your medication list: some prostate drugs change the value."
      },
      {
        "question": "Should I come in the morning for the hormone panel?",
        "answer": "In the morning, when levels are highest. The clinic opens at 9 AM every day, so the practical move is to arrive early and have the PSA drawn at the same time."
      },
      {
        "question": "Does a high PSA mean cancer?",
        "answer": "Not necessarily. It can come from an enlarged prostate, inflammation or an infection. The medical team weighs the result against your age and symptoms, may repeat the test and, if needed, refers you to a specialist."
      },
      {
        "question": "At what age should I start prostate checks?",
        "answer": "U.S. guidelines recommend discussing PSA between ages 55 and 69, or from 45 if your father or a brother had prostate cancer or you are African American. With urinary symptoms, it is checked at any age."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿Qué análisis de sangre puedo hacerme en la clínica?",
        "answer": "Biometría hemática, química sanguínea con glucosa y función de riñón e hígado, perfil de lípidos, hemoglobina A1c, tiroides, vitamina B12, vitamina D, hierro, PSA y pruebas de embarazo, VIH y otras infecciones de transmisión sexual."
      },
      {
        "question": "¿Para cuáles análisis tengo que venir en ayunas?",
        "answer": "Glucosa, perfil de lípidos y química completa piden ayuno, aunque puedes tomar agua. La biometría, la tiroides, la A1c y la mayoría de las hormonas no lo requieren. No dejes tus medicamentos a menos que te lo indiquen."
      },
      {
        "question": "¿Cómo es la toma de la muestra?",
        "answer": "Te registras en recepción, indicas el análisis que necesitas o entregas la orden que traes, y la muestra se toma del brazo. Al terminar puedes comer y seguir con tus actividades normales."
      },
      {
        "question": "¿Quién me explica los resultados?",
        "answer": "Los revisas en consulta con el equipo médico, en español; si un valor sale fuera de rango, ahí se decide el tratamiento o el control que sigue. Al registrarte, pregunta cómo te avisarán cuando estén listos."
      },
      {
        "question": "¿Tienen un paquete de análisis con vitaminas?",
        "answer": "Sí, el examen general de sangre con vitaminas está en la página de promociones, con el detalle de los estudios que incluye."
      }
    ],
    "faqsEn": [
      {
        "question": "Which blood tests can I get at the clinic?",
        "answer": "Complete blood count, a chemistry panel with glucose and kidney and liver function, lipid panel, hemoglobin A1c, thyroid, vitamin B12, vitamin D, iron, PSA, and tests for pregnancy, HIV and other sexually transmitted infections."
      },
      {
        "question": "Which tests require me to come fasting?",
        "answer": "Glucose, the lipid panel and the full chemistry panel need fasting, though water is fine. The blood count, thyroid, A1c and most hormones do not. Do not skip your medications unless you are told to."
      },
      {
        "question": "What is the blood draw like?",
        "answer": "You check in at the front desk, say which test you need or hand over the order you brought, and the sample is drawn from your arm. Afterward you can eat and go back to your normal activities."
      },
      {
        "question": "Who explains my results?",
        "answer": "The clinic's medical team goes over them with you in Spanish and, if anything is off, sets out treatment or follow-up. When you check in, ask how you will be told they are ready."
      },
      {
        "question": "Do you have a blood work package with vitamins?",
        "answer": "Yes. The general blood test with vitamins is listed on the promotions page, along with every test it covers, so you can check it before driving over to FM 529."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Cómo confirman que tengo infección urinaria?",
        "answer": "Entregas una muestra de orina y el urianálisis se procesa en la clínica para buscar leucocitos, nitritos o sangre; conviene no orinar durante la hora previa. Después el equipo médico revisa tus síntomas y confirma el diagnóstico."
      },
      {
        "question": "¿Salgo de la clínica con tratamiento?",
        "answer": "Sí. El examen de orina se hace en la clínica y, si confirma una infección, sales de la consulta con el antibiótico indicado. Si las infecciones se repiten, además se puede enviar un urocultivo al laboratorio."
      },
      {
        "question": "¿Qué síntomas indican que la infección subió a los riñones?",
        "answer": "Fiebre, escalofríos, dolor en la espalda baja o vómito junto con las molestias al orinar. Si los tienes, no lo dejes para después: necesitas atención sin demora."
      },
      {
        "question": "¿Puedo dejar el antibiótico cuando ya no me arde?",
        "answer": "No. Los síntomas suelen mejorar antes de que termine el tratamiento, pero hay que completarlo. Si no notas mejoría en un par de días, regresa a la clínica para que te revisen de nuevo."
      },
      {
        "question": "¿Cómo evito que vuelva la infección?",
        "answer": "Ayuda beber agua a lo largo del día, ir al baño en cuanto sientas ganas, orinar al terminar las relaciones, limpiarte de adelante hacia atrás y dejar las duchas vaginales y los productos que irritan."
      }
    ],
    "faqsEn": [
      {
        "question": "How do you confirm a urinary tract infection?",
        "answer": "You give a urine sample and the urinalysis is run at the clinic to look for white cells, nitrites or blood; try not to urinate for the hour before. The medical team then reviews your symptoms and confirms the diagnosis."
      },
      {
        "question": "Do I leave the clinic with treatment?",
        "answer": "Yes. The urine test is done at the clinic and, if it confirms an infection, you leave the visit with the prescribed antibiotic. If infections keep coming back, a urine culture can also be sent to the lab."
      },
      {
        "question": "Which symptoms mean the infection has reached the kidneys?",
        "answer": "Fever, chills, lower back pain or vomiting along with the burning when you urinate. If you have them, do not put it off: you need care right away."
      },
      {
        "question": "Can I stop the antibiotic once the burning is gone?",
        "answer": "No. Symptoms usually ease before the course is over, but it has to be finished. If you do not feel better within a couple of days, come back to the clinic to be rechecked."
      },
      {
        "question": "How do I keep the infection from coming back?",
        "answer": "Drink enough water through the day, do not hold your urine, urinate after sex, wipe front to back and avoid douching or irritating products."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Qué detecta el examen de heces?",
        "answer": "Parásitos y sus huevos, como amebas, giardia o lombrices; infecciones bacterianas cuando hay diarrea con fiebre o sangre; y sangre oculta. También se revisan la consistencia, el color, el moco y los restos de alimentos."
      },
      {
        "question": "¿Cómo recojo la muestra en casa?",
        "answer": "Evacúa en un recipiente seco o sobre papel limpio, sin agua del inodoro ni orina. Con la paleta toma una porción del tamaño de una nuez, incluye moco o sangre si los hay, cierra bien, anota tu nombre y la fecha y tráela cuanto antes. El recipiente estéril se pide en la clínica."
      },
      {
        "question": "¿Tengo que dejar algún medicamento o comida antes?",
        "answer": "No hace falta ayuno. Evita laxantes, antiácidos y antidiarreicos en los días previos. Para sangre oculta, deja la carne roja y los antiinflamatorios como el ibuprofeno tres días antes. Como los parásitos no salen todos los días, a veces se piden tres muestras tomadas en días diferentes."
      },
      {
        "question": "¿Cuándo una diarrea no puede esperar?",
        "answer": "Diarrea con sangre abundante, fiebre alta, boca seca y poca orina por deshidratación, o dolor abdominal intenso requieren atención sin esperar al examen. En esos casos ven a la clínica o, si es grave, a urgencias."
      },
      {
        "question": "¿Qué pasa cuando sale el resultado?",
        "answer": "El equipo médico te lo explica en español e indica el antiparasitario o el antibiótico que haga falta. El medicamento indicado en tu consulta se entrega en la farmacia de la clínica."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the stool test detect?",
        "answer": "Parasites and their eggs, such as amoebas, giardia or worms; bacterial infections when diarrhea comes with fever or blood; and hidden blood. Consistency, color, mucus and food residue are checked as well."
      },
      {
        "question": "What is the right way to collect stool at home?",
        "answer": "Pass stool into a dry container or onto clean paper, keeping toilet water and urine out. With the scoop take a walnut-sized portion, including any mucus or blood, close it tightly, write your name and the date and bring it in as soon as you can. Ask the clinic for the sterile container."
      },
      {
        "question": "Do I need to stop any medicine or food beforehand?",
        "answer": "No fasting is needed. Avoid laxatives, antacids and antidiarrheals in the days before. For hidden blood, skip red meat and anti-inflammatories like ibuprofen for three days. Because parasites are not shed every day, you may be asked for three samples collected on separate days."
      },
      {
        "question": "When can diarrhea not wait?",
        "answer": "Diarrhea with heavy bleeding, high fever, a dry mouth and little urine from dehydration, or severe belly pain need care without waiting for the test. In those cases come to the clinic or, if it is severe, go to the ER."
      },
      {
        "question": "What happens once the result is in?",
        "answer": "The medical team explains it to you in Spanish and sets out the antiparasitic or antibiotic you need. Whatever medicine is prescribed at your visit, you pick up at the pharmacy inside the clinic."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Cómo sé si mi dolor de garganta puede ser estreptococo?",
        "answer": "Suele empezar de golpe, con fiebre, amígdalas rojas a veces con placas blancas, ganglios del cuello dolorosos y puntos rojos en el paladar. La tos, la ronquera y el moco nasal apuntan más a un virus."
      },
      {
        "question": "¿Cómo se toma la muestra?",
        "answer": "Se frota un hisopo en las amígdalas y el fondo de la garganta durante unos segundos; puede dar ganas de vomitar, pero no duele. Es una prueba rápida y el resultado sale durante la visita."
      },
      {
        "question": "¿Qué pasa si sale positiva o negativa?",
        "answer": "Si es positiva, sales de la consulta con el antibiótico indicado y con tratamiento para el dolor y la fiebre. Si sale negativa y aun así todo apunta a estreptococo, sobre todo en niños, se manda un cultivo de garganta al laboratorio como confirmación."
      },
      {
        "question": "¿Cuántos días falta a clases un niño con estreptococo?",
        "answer": "Deja de contagiar después de un día completo con antibiótico, y desde entonces puede regresar a clases. El antibiótico se toma completo aunque ya no le duela, porque así se previenen complicaciones como la fiebre reumática."
      },
      {
        "question": "¿Por qué no me dan antibiótico sin hacer la prueba?",
        "answer": "Casi siempre el dolor de garganta lo causa un virus, y contra un virus el antibiótico no sirve. Hacer la prueba primero evita tratamientos innecesarios, efectos secundarios y resistencia bacteriana."
      }
    ],
    "faqsEn": [
      {
        "question": "How can I tell if my sore throat might be strep?",
        "answer": "It tends to start suddenly, with fever, red tonsils sometimes with white patches, tender neck glands and red spots on the roof of the mouth. Cough, hoarseness and a runny nose point more toward a virus."
      },
      {
        "question": "How is the sample taken?",
        "answer": "For a few seconds a swab brushes your tonsils and the back of your throat; you might gag a little, but there is no pain. It is a rapid test and the result comes back during the visit."
      },
      {
        "question": "What happens if it comes back positive or negative?",
        "answer": "If it is positive, you leave the visit with the prescribed antibiotic plus something for pain and fever. If it is negative but symptoms strongly suggest strep, especially in children, a throat culture may be sent to confirm."
      },
      {
        "question": "How long does a child with strep stay home from school?",
        "answer": "They stop being contagious after one full day on the antibiotic and can return to class from then on. Even once they feel better, they need to finish the whole course to avoid complications such as rheumatic fever."
      },
      {
        "question": "Why not just give me an antibiotic without testing?",
        "answer": "Most sore throats are viral and do not get better with antibiotics. Testing first avoids unnecessary treatment, side effects and antibiotic resistance."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Qué me conviene, la PPD o la prueba de sangre?",
        "answer": "La PPD requiere dos visitas y puede dar falso positivo si te vacunaron con BCG, algo común en América Latina. La de sangre (IGRA) es de una sola visita, no se altera por la BCG y es la que pide USCIS para el I-693."
      },
      {
        "question": "¿Cuándo regreso a que me lean la PPD?",
        "answer": "Debes volver entre el segundo y el tercer día después de la aplicación; si pasa más tiempo, la prueba se repite. Mientras tanto no cubras la zona con curita ni la rasques, aunque puedes bañarte normal."
      },
      {
        "question": "¿Qué significa un resultado positivo?",
        "answer": "Indica contacto previo con la bacteria, no necesariamente enfermedad activa. Para descartar enfermedad activa se pide una placa del pecho y se revisan contigo, uno por uno, los síntomas que puedas tener. La forma latente no contagia y se trata con medicamentos preventivos."
      },
      {
        "question": "¿Cuándo no me pueden aplicar la PPD?",
        "answer": "Si recibiste una vacuna de virus vivo, como MMR o varicela, en las últimas 4 semanas, o si tuviste una reacción grave a la tuberculina antes. En esos casos se usa la prueba de sangre."
      },
      {
        "question": "¿Me entregan un documento para el trabajo o la escuela?",
        "answer": "Sí, se entrega un documento con el resultado para empleo, escuela, voluntariado o trámite migratorio. Lo piden con frecuencia los empleos en salud, cuidado infantil y alimentos."
      }
    ],
    "faqsEn": [
      {
        "question": "Which is better for me, the PPD or the blood test?",
        "answer": "The PPD takes two visits and can give a false positive if you had the BCG vaccine, which is common in Latin America. The blood test (IGRA) takes one visit, is not affected by BCG and is the one USCIS requires for the I-693."
      },
      {
        "question": "After the PPD is placed, when do I return for the reading?",
        "answer": "Come back between the second and third day after it is placed; any later and the test has to be redone. In the meantime do not cover the spot with a bandage or scratch it, though you can shower as usual."
      },
      {
        "question": "What does a positive result mean?",
        "answer": "It shows past contact with the bacteria, not necessarily active disease. A chest X-ray and a symptom check follow. Latent TB is not contagious and is treated with preventive medication."
      },
      {
        "question": "When can I not get a PPD?",
        "answer": "If you received a live-virus vaccine, such as MMR or chickenpox, in the past 4 weeks, or if you had a severe reaction to tuberculin before. In those cases the blood test is used."
      },
      {
        "question": "Do I get a document for work or school?",
        "answer": "Yes, you receive a document with the result for employment, school, volunteering or an immigration case. Jobs in health care, child care and food service ask for it often."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Qué pruebas incluye el panel de ETS?",
        "answer": "Sangre para VIH, sífilis y hepatitis B y C; orina para clamidia y gonorrea; y prueba de herpes si hay llagas. Todo empieza con una consulta privada sobre tus síntomas y factores de riesgo."
      },
      {
        "question": "¿Cuánto debo esperar después del contacto para hacerme la prueba?",
        "answer": "Cada infección tiene su periodo de ventana: clamidia y gonorrea se detectan antes que el VIH, la sífilis o la hepatitis. Si el contacto fue reciente, puedes hacerte la prueba ahora y repetirla cuando se cumpla ese periodo."
      },
      {
        "question": "¿Quién se entera de mis resultados?",
        "answer": "La consulta es confidencial y nada se comparte con terceros. El equipo médico te explica los resultados en español y, si alguno sale positivo, te orienta sobre cómo avisar a tu pareja y que también se trate."
      },
      {
        "question": "¿Qué tratamiento hay si sale positiva?",
        "answer": "Para clamidia, gonorrea, sífilis y tricomonas hay cura con antibióticos, y el medicamento indicado se te entrega en la clínica. Evita relaciones hasta una semana después de terminar y hasta que tu pareja también esté tratada. Para VIH se hace la referencia a atención especializada."
      },
      {
        "question": "¿Me hago la prueba aunque no tenga síntomas?",
        "answer": "Sí, porque muchas infecciones no dan síntomas. Se recomienda después de una relación sin protección o con pareja nueva, al inicio del embarazo y una vez al año si tienes menos de 25 años o varias parejas."
      }
    ],
    "faqsEn": [
      {
        "question": "Which tests are in the STD panel?",
        "answer": "Blood for HIV, syphilis and hepatitis B and C; urine for chlamydia and gonorrhea; and a herpes test if there are sores. It all starts with a private conversation about your symptoms and risk factors."
      },
      {
        "question": "How long after contact should I wait to get tested?",
        "answer": "Each infection has its own window period: chlamydia and gonorrhea show up sooner than HIV, syphilis or hepatitis. If the contact was recent, you can test now and repeat it once that window has passed."
      },
      {
        "question": "Who finds out about my results?",
        "answer": "The visit is confidential and nothing is shared with anyone else. The medical team explains your results in Spanish and, if any are positive, guides you on telling your partner so they get treated too."
      },
      {
        "question": "What treatment is there if it is positive?",
        "answer": "Chlamydia, gonorrhea, syphilis and trichomonas are cured with antibiotics, handed to you at the clinic. Avoid sex until a week after finishing and until your partner is treated too. For HIV, you are referred to specialized care."
      },
      {
        "question": "Should I get tested even without symptoms?",
        "answer": "Yes, because many infections cause no symptoms. Testing is recommended after unprotected sex or a new partner, early in pregnancy, and once a year if you are under 25 or have several partners."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Qué sustancias detecta la prueba de orina?",
        "answer": "Según el panel: marihuana, cocaína, opiáceos, anfetaminas, metanfetaminas, benzodiacepinas y otras sustancias. También se hace prueba de alcohol cuando el empleador o la institución la pide."
      },
      {
        "question": "¿Qué tengo que traer a la prueba de drogas?",
        "answer": "Identificación con foto vigente, el formulario u orden del empleador si te lo dio y la lista de tus medicamentos recetados, porque algunos pueden dar positivo y deben quedar documentados."
      },
      {
        "question": "¿Puedo tomar mucha agua antes?",
        "answer": "Mejor no: una muestra diluida puede ser rechazada. La recolección es supervisada, en recipiente sellado y bajo protocolo de custodia, después de verificar tu identidad y firmar el consentimiento."
      },
      {
        "question": "¿Quién recibe el resultado?",
        "answer": "Recibes un documento con el resultado o se envía directamente a quien lo pidió. Si el resultado inicial es positivo o el solicitante lo exige, se confirma en laboratorio."
      },
      {
        "question": "¿Sirve para el programa DOT de conductores comerciales?",
        "answer": "Las pruebas de drogas del programa federal DOT se gestionan por medio del empleador o de su consorcio. En la clínica se hace el examen físico DOT y pruebas de drogas y alcohol para otros empleos y trámites."
      }
    ],
    "faqsEn": [
      {
        "question": "Which substances does the urine test detect?",
        "answer": "Depending on the panel: marijuana, cocaine, opiates, amphetamines, methamphetamines, benzodiazepines and other substances. An alcohol test is also done when the employer or institution asks for one."
      },
      {
        "question": "What do I need to bring to the drug test?",
        "answer": "A current photo ID, the employer's form or order if you were given one, and a list of your prescription medications, since some can test positive and need to be documented."
      },
      {
        "question": "Can I drink a lot of water beforehand?",
        "answer": "Better not: a diluted sample can be rejected. Collection is supervised, in a sealed container and under chain-of-custody protocol, after your ID is verified and you sign the consent."
      },
      {
        "question": "Who receives the result?",
        "answer": "You get a document with the result, or it goes straight to whoever requested it. If the first result is positive or the requester demands it, it is confirmed by a lab."
      },
      {
        "question": "Does it count for the DOT commercial driver program?",
        "answer": "Federal DOT drug tests are handled through the employer or its testing consortium. The clinic does the DOT physical and drug and alcohol tests for other jobs and paperwork."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿Duele el electrocardiograma?",
        "answer": "No. Se colocan 10 electrodos adhesivos en pecho, brazos y piernas, y el aparato solo lee la actividad eléctrica del corazón; no se siente ninguna corriente. Solo tienes que estar quieto y respirar con normalidad durante el registro."
      },
      {
        "question": "¿Cómo me preparo para el EKG?",
        "answer": "No hace falta ayuno ni dejar medicamentos. Ese día no te pongas cremas ni aceites en el pecho, evita el ejercicio intenso justo antes y usa ropa fácil de quitar. Trae estudios previos del corazón si los tienes."
      },
      {
        "question": "¿En qué casos se indica un electrocardiograma?",
        "answer": "Palpitaciones, latidos irregulares, mareo o falta de aire; control anual con presión alta o diabetes; antes de una cirugía o de ejercicio intenso; exámenes de trabajo o deporte; o antecedentes familiares de muerte súbita."
      },
      {
        "question": "¿Qué no puede detectar un EKG en reposo?",
        "answer": "No muestra arterias obstruidas que todavía no dan síntomas ni arritmias que aparecen de vez en cuando. Para eso existen la prueba de esfuerzo y el monitor Holter, y se hace la referencia al especialista cuando hace falta."
      },
      {
        "question": "¿Si tengo dolor de pecho vengo a la clínica?",
        "answer": "No si el dolor dura más de 15 minutos, se extiende al brazo o a la mandíbula o viene con sudor, náusea y falta de aire: puede ser un infarto y debes llamar al 911."
      }
    ],
    "faqsEn": [
      {
        "question": "Does an EKG hurt?",
        "answer": "No. Ten sticky electrodes go on your chest, arms and legs, and the machine only reads the heart's electrical activity; you feel no current. You just stay still and breathe normally while it records."
      },
      {
        "question": "How do I prepare for the EKG?",
        "answer": "No fasting and no stopping medications. That day, skip creams or oils on your chest, avoid hard exercise right before and wear clothes that come off easily. Bring earlier heart tests if you have them."
      },
      {
        "question": "When is an electrocardiogram ordered?",
        "answer": "Palpitations, irregular heartbeat, dizziness or shortness of breath; yearly checks with high blood pressure or diabetes; before surgery or intense exercise; work or sports exams; or a family history of sudden death."
      },
      {
        "question": "What can a resting EKG not detect?",
        "answer": "It does not show blocked arteries that are not yet causing symptoms or rhythm problems that only come and go. That is what stress tests and Holter monitors are for, and you are referred to a specialist when needed."
      },
      {
        "question": "If I have chest pain, should I come to the clinic?",
        "answer": "Not if the pain lasts more than 15 minutes, spreads to the arm or jaw, or comes with sweating, nausea and shortness of breath: it may be a heart attack and you should call 911."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿Qué partes del cuerpo se pueden ver con ultrasonido en la clínica?",
        "answer": "Abdominal (hígado, vesícula, páncreas, bazo y riñones), pélvico, de embarazo, de tiroides, de tejidos blandos para bultos o lipomas, y renal y vesical para cálculos o retención de orina."
      },
      {
        "question": "¿Cómo me preparo según el estudio?",
        "answer": "Abdominal: ayuno de 6 a 8 horas, con agua permitida. Pélvico, renal y de embarazo temprano: vejiga llena, tomando 3 o 4 vasos de agua una hora antes sin orinar. Tiroides, tejidos blandos y embarazo después de la semana 12: sin preparación."
      },
      {
        "question": "¿Es seguro el ultrasonido en el embarazo?",
        "answer": "Sí. Usa ondas de sonido, no radiación, y se puede repetir las veces necesarias sin efectos secundarios. Se aplica un gel tibio y el transductor se desliza sobre la piel; puede presionar, pero no duele."
      },
      {
        "question": "¿Quién me explica lo que se ve en las imágenes?",
        "answer": "El equipo médico revisa las imágenes y te explica los hallazgos en español. Si se trata de un bulto en la piel, el ultrasonido también ayuda a planear su retiro con una cirugía menor en la misma clínica."
      },
      {
        "question": "¿Hay un paquete que incluya ultrasonido?",
        "answer": "Sí. El chequeo completo de la mujer con ultrasonido aparece en la página de promociones con todo lo que incluye, para que lo revises antes de venir a FM 529."
      }
    ],
    "faqsEn": [
      {
        "question": "Which parts of the body can be scanned at the clinic?",
        "answer": "Abdominal (liver, gallbladder, pancreas, spleen and kidneys), pelvic, pregnancy, thyroid, soft tissue for lumps or lipomas, and kidney and bladder for stones or urine retention."
      },
      {
        "question": "How do I prepare for each scan?",
        "answer": "Abdominal: fast 6 to 8 hours, water allowed. Pelvic, kidney and early pregnancy: full bladder, drinking 3 or 4 glasses of water an hour before without urinating. Thyroid, soft tissue and pregnancy after week 12: no preparation."
      },
      {
        "question": "Is ultrasound safe during pregnancy?",
        "answer": "Yes. It uses sound waves, not radiation, and can be repeated as often as needed with no side effects. A warm gel goes on and the probe glides over the skin; it may press, but it does not hurt."
      },
      {
        "question": "Who explains what the images show?",
        "answer": "Your images are reviewed by the medical team, who walks you through the findings in Spanish. For a lump under the skin, the ultrasound also helps plan its removal with minor surgery at the same clinic."
      },
      {
        "question": "Is there a package that includes an ultrasound?",
        "answer": "Yes. The complete women's checkup with ultrasound is on the promotions page with everything it covers, so you can look it over before coming to FM 529."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿Qué revisan en el examen físico DOT?",
        "answer": "Visión de al menos 20/40 en cada ojo con o sin lentes, audición de un susurro a 5 pies, presión arterial y pulso, examen de orina para proteína, azúcar y sangre, y una revisión física con tu historial y medicamentos."
      },
      {
        "question": "¿El examen de orina del DOT es de drogas?",
        "answer": "No. Busca proteína, azúcar y sangre como parte de la revisión de salud. Las pruebas de drogas del programa DOT las coordina tu empleador o su consorcio de pruebas."
      },
      {
        "question": "¿Qué llevo al examen para mi licencia CDL?",
        "answer": "Licencia vigente, lentes o aparato auditivo, lista de medicamentos, tu certificado anterior y, si tienes diabetes, presión alta, problemas del corazón o apnea del sueño, los registros recientes de tu médico y el reporte de uso del CPAP."
      },
      {
        "question": "¿Por cuánto tiempo vale el certificado médico DOT?",
        "answer": "Hasta 24 meses. Con presión alta controlada, diabetes u otra condición en seguimiento, el examinador puede emitirlo por menos tiempo, de 3 meses a 1 año. Recuerda entregar una copia al DPS de Texas para tu CDL."
      },
      {
        "question": "¿Qué pasa si mi presión sale alta en el examen?",
        "answer": "El examinador puede pedir documentación o emitir un certificado más corto en vez de negarlo. Los tropiezos más comunes son presión de 160/100 o más, diabetes con insulina sin el formulario MCSA-5870 y visión menor de 20/40 sin corrección."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the DOT physical check?",
        "answer": "Vision of at least 20/40 in each eye with or without glasses, hearing a whisper at 5 feet, blood pressure and pulse, a urine test for protein, sugar and blood, and a physical exam with your history and medications."
      },
      {
        "question": "Is the DOT urine test a drug test?",
        "answer": "No. It looks for protein, sugar and blood as part of the health review. DOT program drug tests are arranged by your employer or its testing consortium."
      },
      {
        "question": "What do I bring to the exam for my CDL?",
        "answer": "Your current license, glasses or hearing aid, medication list, your previous certificate and, if you have diabetes, high blood pressure, heart problems or sleep apnea, recent records from your doctor and your CPAP usage report."
      },
      {
        "question": "For how many months does my DOT medical card last?",
        "answer": "Up to 24 months. If you have controlled high blood pressure, diabetes or another condition being monitored, expect a shorter card, anywhere from 3 months to 1 year. Remember to give a copy to Texas DPS for your CDL."
      },
      {
        "question": "What happens if my blood pressure is high at the exam?",
        "answer": "The examiner may ask for documentation or issue a shorter certificate instead of denying it. The most common hurdles are blood pressure of 160/100 or higher, insulin-treated diabetes without form MCSA-5870, and uncorrected vision below 20/40."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿Quién necesita el examen médico I-693?",
        "answer": "Quien solicita la residencia permanente desde dentro de Estados Unidos con el Formulario I-485, y también algunos refugiados, asilados y ciertas visas. Si tramitas desde fuera del país, el examen se hace con un médico del panel del consulado."
      },
      {
        "question": "¿Qué incluye el examen de inmigración en la clínica?",
        "answer": "Revisión de historial y vacunas, examen físico, prueba de tuberculosis en sangre (IGRA) desde los 2 años, pruebas de sífilis y gonorrea según la edad, las vacunas requeridas, como MMR, Tdap o varicela, y el formulario completado por un Civil Surgeon autorizado por USCIS."
      },
      {
        "question": "¿Qué documentos llevo al examen I-693?",
        "answer": "Pasaporte o identificación con foto, registro de vacunas traducido al inglés si está en otro idioma, registros de condiciones crónicas, resultados o radiografías previas si tuviste tuberculosis, y tu número de recibo si USCIS ya pidió el examen."
      },
      {
        "question": "¿Puedo abrir el sobre del I-693?",
        "answer": "No. El formulario se entrega en sobre sellado, con una copia aparte para ti. USCIS solo lo acepta cerrado, tal como lo selló el Civil Surgeon."
      },
      {
        "question": "¿Cuánto tiempo es válido el formulario?",
        "answer": "USCIS ha cambiado varias veces esa regla. Lo más seguro es presentar el I-693 con tu solicitud o cuando USCIS lo pida, y confirmar la regla vigente en uscis.gov."
      }
    ],
    "faqsEn": [
      {
        "question": "Who needs the I-693 medical exam?",
        "answer": "People adjusting status to permanent resident from within the U.S. on Form I-485 need it, as do some refugees, asylees and certain visa holders. If you apply from abroad, the exam is done by a consulate panel physician instead."
      },
      {
        "question": "What does the immigration exam at the clinic include?",
        "answer": "Review of your history and vaccines, a physical exam, a TB blood test (IGRA) from age 2, syphilis and gonorrhea tests by age, required vaccines such as MMR, Tdap or varicella, and the form completed by a USCIS-authorized Civil Surgeon."
      },
      {
        "question": "Which documents do I bring to the I-693 exam?",
        "answer": "Passport or photo ID, your vaccination record translated into English if it is in another language, records of chronic conditions, earlier results or X-rays if you had TB, and your receipt number if USCIS already requested the exam."
      },
      {
        "question": "Can I open the I-693 envelope?",
        "answer": "No. The form is handed over in a sealed envelope, with a separate copy for you. USCIS only accepts it unopened, exactly as the Civil Surgeon sealed it."
      },
      {
        "question": "How long is the form valid?",
        "answer": "USCIS has changed that rule several times. The safest approach is to file the I-693 with your application or when USCIS requests it, and check the current rule on uscis.gov."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Qué vacunas ponen en la clínica?",
        "answer": "La vacuna anual de la influenza desde los 6 meses, la Tdap y el refuerzo Td contra tétanos y difteria, y las vacunas que pide USCIS para el examen de inmigración según tu edad y registro. Cada dosis queda anotada en tu cartilla."
      },
      {
        "question": "¿Cuándo me conviene la vacuna de la gripe?",
        "answer": "Cada año, idealmente en septiembre u octubre, antes de la temporada; si no alcanzaste, todavía sirve en diciembre o enero. Pesa más en quienes tienen más de 65 años, en el embarazo, en los niños pequeños y en quien vive con diabetes, asma o enfermedad del corazón."
      },
      {
        "question": "Me corté con algo sucio, ¿necesito refuerzo de tétanos?",
        "answer": "Toca refuerzo cuando la herida está sucia o es profunda y ya pasaron más de 5 años desde tu última dosis. Fuera de eso, los adultos lo renuevan cada 10 años, y en cada embarazo se recomienda una dosis de Tdap."
      },
      {
        "question": "¿Me puedo enfermar de gripe por vacunarme?",
        "answer": "No, porque no contiene virus vivo. Lo normal es dolor o hinchazón en el brazo uno o dos días y, a veces, febrícula o cansancio leve. Una reacción alérgica grave es muy rara y se atiende de inmediato."
      },
      {
        "question": "¿Me vacuno si hoy tengo fiebre?",
        "answer": "Mejor espera a recuperarte si tienes fiebre o una enfermedad moderada. Si tuviste una reacción alérgica grave a una dosis anterior o al huevo, dilo antes de la aplicación, y trae tu cartilla de vacunas si la tienes."
      }
    ],
    "faqsEn": [
      {
        "question": "Which vaccines does the clinic give?",
        "answer": "The annual flu shot from 6 months of age, Tdap and the Td booster against tetanus and diphtheria, and the vaccines USCIS requires for the immigration exam based on your age and record. Each dose is written on your card."
      },
      {
        "question": "When should I get my flu shot?",
        "answer": "Every year, ideally in September or October, before the season; if you missed it, it still helps in December or January. It counts most for adults past 65, during pregnancy, for small children and for anyone living with diabetes, asthma or heart disease."
      },
      {
        "question": "I cut myself on something dirty. Do I need a tetanus booster?",
        "answer": "You get a booster when the wound is dirty or deep and more than 5 years have passed since your last dose. Otherwise adults renew it every 10 years, and a Tdap dose is recommended in each pregnancy."
      },
      {
        "question": "Could getting vaccinated make me sick with the flu?",
        "answer": "No, because it contains no live virus. Soreness or swelling in the arm for a day or two is normal, sometimes with a low fever or mild tiredness. A severe allergic reaction is very rare and is treated right away."
      },
      {
        "question": "Should I get vaccinated if I have a fever today?",
        "answer": "Better to wait until you recover if you have a fever or a moderate illness. If you ever had a severe allergic reaction to a previous dose or to eggs, say so before the shot, and bring your vaccination card if you have it."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Qué pasa antes de ponerme el suero?",
        "answer": "Hay una evaluación breve de tus síntomas, presión arterial, historial y medicamentos para confirmar que el suero es adecuado para ti. Si aparece una condición de riesgo, el equipo médico te indica otra opción."
      },
      {
        "question": "¿Cómo es la aplicación del suero?",
        "answer": "Se coloca un catéter pequeño en una vena del brazo y descansas sentado o recostado mientras pasa el suero, con personal médico pendiente de ti. Al terminar se retira el catéter, se pone un vendaje y sigues con tu día."
      },
      {
        "question": "¿Quién no debe recibir un suero vitaminado?",
        "answer": "Personas con insuficiencia renal o cardiaca, presión arterial muy alta o alergia a algún componente. Por eso la evaluación previa es obligatoria y no se omite aunque ya te hayas puesto sueros antes."
      },
      {
        "question": "¿Qué molestias son normales durante o después?",
        "answer": "Molestia o un moretón donde va el catéter, sabor metálico o sensación de calor mientras pasa el suero. Son leves y pasajeras, y el personal supervisa toda la aplicación."
      },
      {
        "question": "¿Puedo revisar antes si me falta alguna vitamina?",
        "answer": "Sí. El examen general de sangre con vitaminas, publicado en la página de promociones, sirve para saber si tienes una deficiencia antes de decidir cómo tratarla."
      }
    ],
    "faqsEn": [
      {
        "question": "What happens before I get the IV?",
        "answer": "There is a short evaluation of your symptoms, blood pressure, history and medications to confirm the IV is right for you. If a risk condition turns up, the medical team points you to another option."
      },
      {
        "question": "What is getting the IV like?",
        "answer": "A small catheter goes into a vein in your arm and you rest sitting or lying back while the IV runs, with medical staff watching over you. When it is done the catheter comes out, a bandage goes on and you carry on with your day."
      },
      {
        "question": "Who should not get a vitamin IV?",
        "answer": "People with kidney or heart failure, very high blood pressure or an allergy to any component. That is why the evaluation beforehand is mandatory and is never skipped, even if you have had IVs before."
      },
      {
        "question": "What discomfort is normal during or after?",
        "answer": "Soreness or a bruise at the catheter site, a metallic taste or a warm feeling while the IV runs. These are mild and short-lived, and staff supervise the whole infusion."
      },
      {
        "question": "Can I check first whether I am low on any vitamin?",
        "answer": "Yes. The general blood test with vitamins, listed on the promotions page, shows whether you have a deficiency before deciding how to treat it."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Mi cortada necesita puntos?",
        "answer": "Probablemente sí si mide más de 1 centímetro, los bordes se separan, se ve grasa o tejido, sigue sangrando tras 10 minutos de presión o está en la cara, las manos o una articulación. Raspones y cortes superficiales con bordes juntos suelen cerrar solos."
      },
      {
        "question": "¿Qué tan pronto debo venir después de cortarme?",
        "answer": "Lo antes posible: lo ideal es en las primeras 6 a 8 horas. Pasado ese tiempo, a veces la herida solo se limpia y se deja cerrar sola para evitar infección. La sutura se hace en la misma consulta, sin cita."
      },
      {
        "question": "¿Me ponen la vacuna del tétanos con la sutura?",
        "answer": "Si tu último refuerzo fue hace más de 5 años, se aplica como parte de la atención, junto con la revisión de tendones y nervios, la limpieza, la anestesia local y el cierre con puntos, grapas o adhesivo."
      },
      {
        "question": "¿Cómo cuido los puntos en casa?",
        "answer": "Mantén el vendaje seco y limpio los primeros días; luego lava suave con agua y jabón y seca sin frotar. No metas la herida en piscina o tina hasta que retiren los puntos, y regresa si hay pus, calor, fiebre o enrojecimiento que crece."
      },
      {
        "question": "¿Qué heridas no se atienden en la clínica y van directo a urgencias?",
        "answer": "Si el sangrado no se controla con presión, la herida es por arma o se ve el hueso, hay amputación parcial, pérdida de sensibilidad o movimiento, o una mordedura profunda en la cara o las manos."
      }
    ],
    "faqsEn": [
      {
        "question": "Does my cut need stitches?",
        "answer": "Probably, if it is longer than 1 centimeter, the edges pull apart, you can see fat or tissue, it keeps bleeding after 10 minutes of pressure, or it is on the face, hands or a joint. Scrapes and shallow cuts with edges together usually close on their own."
      },
      {
        "question": "How soon should I come in after a cut?",
        "answer": "As soon as you can: ideally within the first 6 to 8 hours. After that, the wound is sometimes just cleaned and left to close on its own to avoid infection. Stitching is done during the same visit, no appointment needed."
      },
      {
        "question": "Do I get a tetanus shot along with the stitches?",
        "answer": "If your last booster was more than 5 years ago, it is given as part of the visit, together with checking tendons and nerves, cleaning, local anesthesia and closure with stitches, staples or skin glue."
      },
      {
        "question": "How do I care for my stitches at home?",
        "answer": "Keep the dressing clean and dry for the first days; after that, wash gently with soap and water and pat dry. Keep the wound out of pools and tubs until the stitches are out, and come back for pus, warmth, fever or growing redness."
      },
      {
        "question": "Which injuries should go straight to the ER instead?",
        "answer": "If bleeding will not stop with pressure, the wound is from a weapon or bone is showing, there is a partial amputation, loss of feeling or movement, or a deep bite on the face or hands."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Qué heridas atienden en curación?",
        "answer": "Heridas después de una cirugía o un drenaje, úlceras en pies con diabetes o venosas en las piernas, quemaduras leves, raspones por caídas o accidentes de trabajo, heridas que llevan más de 2 semanas sin cerrar y retiro de puntos y grapas."
      },
      {
        "question": "¿Qué hacen en cada visita de curación?",
        "answer": "Se retira el vendaje anterior, se examina la herida, se lava con solución estéril, se retira el tejido que no cicatriza y se coloca el apósito adecuado. Al final se programa el siguiente cambio y se repasan los cuidados."
      },
      {
        "question": "¿Cada cuánto me cambian el vendaje?",
        "answer": "Depende de la herida: las que drenan mucho pueden necesitar cambio diario, y las úlceras de pie diabético se revisan al menos una vez por semana. El equipo médico define la frecuencia en tu primera visita."
      },
      {
        "question": "¿Puedo ponerle alcohol o agua oxigenada?",
        "answer": "No. El alcohol, el agua oxigenada y los remedios caseros dañan el tejido nuevo. Lávate las manos antes de tocar el vendaje, mantenlo seco y, si tienes diabetes, controla tu glucosa y no apoyes peso sobre la úlcera."
      },
      {
        "question": "¿Qué señales de infección debo vigilar?",
        "answer": "Vigila si lo rojo avanza más de 2 centímetros alrededor del borde, si la zona está caliente o hinchada, si sale pus o huele mal, si duele cada vez más, si te da fiebre o si aparecen líneas rojas subiendo por la piel. Con cualquiera de ellas, ven a la clínica sin esperar a tu próximo cambio."
      }
    ],
    "faqsEn": [
      {
        "question": "Which wounds do you treat in wound care?",
        "answer": "Wounds after surgery or drainage, diabetic foot ulcers or venous leg ulcers, minor burns, scrapes from falls or work accidents, wounds that have not closed after 2 weeks, and removal of stitches and staples."
      },
      {
        "question": "What happens at each wound care visit?",
        "answer": "The old dressing comes off, the wound is examined and rinsed with sterile solution, tissue that is not healing is removed and the right dressing goes on. At the end the next change is scheduled and home care is reviewed."
      },
      {
        "question": "How often is my dressing changed?",
        "answer": "It depends on the wound: heavily draining ones may need a daily change, and diabetic foot ulcers are checked at least once a week. The medical team sets the schedule at your first visit."
      },
      {
        "question": "Can I put alcohol or hydrogen peroxide on it?",
        "answer": "No. Alcohol, peroxide and home remedies damage new tissue. Wash your hands before touching the dressing, keep it dry and, if you have diabetes, keep your glucose in check and keep weight off the ulcer."
      },
      {
        "question": "How can I tell my wound is getting infected?",
        "answer": "Redness spreading more than 2 centimeters from the edge, warmth, swelling, pus or a bad smell, increasing pain, fever or red streaks running up the skin. With any of them, come in without waiting for your next change."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué bultos o lesiones de la piel se retiran en la clínica?",
        "answer": "Lunares y lesiones de la piel, quistes sebáceos y epidermoides, lipomas, verrugas y acrocordones, y cuerpos extraños superficiales como astillas o vidrio. También se toman biopsias de lesiones sospechosas para enviarlas a patología."
      },
      {
        "question": "¿Cuándo conviene revisar un lunar?",
        "answer": "Fíjate en las señales ABCDE: un lunar que crece, cambia de color o de forma, tiene bordes irregulares, pasa de 6 milímetros, sangra o da comezón merece revisión. Un quiste que se inflama una y otra vez o un lipoma que crece o molesta también se pueden retirar."
      },
      {
        "question": "¿Voy a sentir dolor durante el procedimiento?",
        "answer": "Se aplica anestesia local; después del pinchazo solo sentirás presión. La lesión se retira completa con un margen de piel sana, se cierra con puntos y se cubre. Cuando hace falta, antes se evalúa con ultrasonido en la clínica."
      },
      {
        "question": "¿Qué cuidados tengo después?",
        "answer": "Mantén el vendaje seco los primeros días, evita el ejercicio intenso y estirar la zona, toma el analgésico indicado y vuelve a la clínica para el retiro de puntos. Regresa antes si hay sangrado que no cede, pus o fiebre."
      },
      {
        "question": "¿Hay casos que no se operan en la clínica?",
        "answer": "Sí: lesiones muy grandes o profundas, las del párpado o cerca de nervios importantes, y los tumores que requieren cirugía mayor se refieren a un cirujano o dermatólogo."
      }
    ],
    "faqsEn": [
      {
        "question": "What can be removed with minor surgery?",
        "answer": "Moles and skin lesions, sebaceous and epidermoid cysts, lipomas, warts and skin tags, and shallow foreign bodies such as splinters or glass. Biopsies of suspicious lesions are also taken and sent to pathology."
      },
      {
        "question": "When should a mole be checked?",
        "answer": "If it changes size, color or shape, has irregular borders, is larger than 6 millimeters, bleeds or itches: those are the ABCDE signs. A cyst that keeps flaring up or a lipoma that grows or gets in the way can be removed too."
      },
      {
        "question": "Will I feel pain during the procedure?",
        "answer": "Local anesthesia is used; after the pinch you only feel pressure. The lesion is removed whole with a margin of healthy skin, closed with stitches and covered. When needed, it is first assessed with ultrasound at the clinic."
      },
      {
        "question": "What care do I need afterward?",
        "answer": "Keep the dressing dry for the first days, avoid hard exercise and stretching the area, take the pain reliever you were given and come back to the clinic to have the stitches removed. Return sooner for bleeding that will not stop, pus or fever."
      },
      {
        "question": "Are there cases the clinic does not operate on?",
        "answer": "Yes: very large or deep lesions, those on the eyelid or near important nerves, and tumors needing major surgery are referred to a surgeon or dermatologist."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿Este bulto en la piel puede ser un absceso?",
        "answer": "Es un bulto rojo, caliente, hinchado y doloroso, blando o con líquido en el centro, a veces con una punta blanca o amarilla y fiebre. Sale mucho en axilas, ingles, glúteos, espalda y cara, y puede empezar como un grano."
      },
      {
        "question": "¿Por qué no debo exprimirlo en casa?",
        "answer": "Exprimirlo o pincharlo empuja la infección hacia el tejido profundo y la sangre, y suele empeorarlo. En la clínica se drena con anestesia local, instrumentos estériles y una incisión que deja salir todo el pus."
      },
      {
        "question": "¿Cómo es el drenaje?",
        "answer": "Es un procedimiento en la misma consulta: anestesia local, una pequeña incisión, salida del pus, lavado de la cavidad y, si el absceso es grande, una gasa dentro. El dolor se alivia casi enseguida al liberar la presión."
      },
      {
        "question": "¿Qué cuidados siguen después del drenaje?",
        "answer": "Cambia el vendaje como se te indique, aplica compresas tibias tres veces al día, termina el antibiótico si te lo dieron y regresa a la clínica para retirar o cambiar la gasa interna. La herida sana desde adentro, sin puntos."
      },
      {
        "question": "¿Siempre necesito antibiótico?",
        "answer": "No; el drenaje es el tratamiento principal. Se indica antibiótico si la piel alrededor está infectada, hay fiebre, el absceso mide más de 5 centímetros, hay varios o tienes diabetes o defensas bajas."
      }
    ],
    "faqsEn": [
      {
        "question": "Is this bump on my skin an abscess?",
        "answer": "Look for a lump that is red, warm, swollen and sore, feels soft or full of fluid in the middle, may have a white or yellow tip, and sometimes comes with fever. It often shows up in the armpits, groin, buttocks, back and face, and can start as a pimple."
      },
      {
        "question": "Why should I not squeeze it at home?",
        "answer": "Squeezing or poking it pushes the infection into deeper tissue and the bloodstream, and usually makes it worse. At the clinic it is drained with local anesthesia, sterile instruments and an incision that lets all the pus out."
      },
      {
        "question": "What is the drainage like?",
        "answer": "It is done during the same visit: local anesthesia, a small incision, draining the pus, rinsing the cavity and, if the abscess is large, packing gauze inside. The pain eases almost at once as the pressure is released."
      },
      {
        "question": "What care follows the drainage?",
        "answer": "Change the dressing as instructed, use warm compresses three times a day, finish the antibiotic if you were given one and come back to the clinic to have the inner gauze removed or changed. The wound heals from the inside, without stitches."
      },
      {
        "question": "Do I always need an antibiotic?",
        "answer": "No; drainage is the main treatment. An antibiotic is added if the surrounding skin is infected, there is fever, the abscess is larger than 5 centimeters, there are several, or you have diabetes or a weak immune system."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Cuándo una uña encarnada necesita procedimiento?",
        "answer": "Si hay pus, dolor intenso, piel que crece sobre la uña, el problema se repite o tienes diabetes. En una etapa temprana, sin pus, pueden ayudar los baños de agua tibia con sal, el zapato abierto y no seguir cortando la uña."
      },
      {
        "question": "¿Cómo es el procedimiento en el dedo?",
        "answer": "Se duerme el dedo con anestesia local en la base, se corta desde la raíz la franja lateral de la uña que está clavada, se limpia y se drena si hay infección, y se coloca un vendaje con pomada antibiótica. Sales caminando con zapato abierto."
      },
      {
        "question": "¿Cómo cuido el dedo en casa?",
        "answer": "Ese día mantén el pie elevado y toma el analgésico indicado. Cambia el vendaje como se te indique, lava a diario con agua y jabón, usa sandalias una semana y regresa si hay pus, fiebre o enrojecimiento que crece."
      },
      {
        "question": "¿Cómo evito que vuelva a encarnarse?",
        "answer": "Corta las uñas rectas y no muy cortas, sin redondear las esquinas, usa zapatos con espacio para los dedos, no arranques los bordes y mantén los pies secos. Si se repite varias veces, se te refiere a un procedimiento que destruye la raíz de ese borde."
      },
      {
        "question": "¿Por qué no debo tratarla en casa si tengo diabetes?",
        "answer": "Con diabetes o mala circulación, una uña encarnada infectada puede convertirse en una úlcera. Ven a la clínica desde los primeros síntomas; antes del procedimiento se revisa también la circulación del dedo."
      }
    ],
    "faqsEn": [
      {
        "question": "When does an ingrown nail need a procedure?",
        "answer": "If there is pus, severe pain, skin growing over the nail, it keeps coming back or you have diabetes. Early on, without pus, warm salt-water soaks, open shoes and not cutting the nail any further can help."
      },
      {
        "question": "What is the toe procedure like?",
        "answer": "The toe is numbed with local anesthesia at its base, the side strip of nail that is digging in is cut out from the root, the area is cleaned and drained if infected, and a bandage with antibiotic ointment goes on. You walk out in an open shoe."
      },
      {
        "question": "How do I care for the toe at home?",
        "answer": "That day, keep your foot up and take the pain reliever you were given. Change the bandage as instructed, wash daily with soap and water, wear sandals for a week and come back for pus, fever or spreading redness."
      },
      {
        "question": "What stops the nail from digging in again?",
        "answer": "Cut nails straight across and not too short, without rounding the corners, wear shoes with room for your toes, do not tear at the edges and keep your feet dry. If it keeps happening, you are referred for a procedure that destroys the root of that edge."
      },
      {
        "question": "Why should I not treat it at home if I have diabetes?",
        "answer": "With diabetes or poor circulation, an infected ingrown nail can turn into an ulcer. Come to the clinic at the first symptoms; the toe's circulation is checked before the procedure."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Qué medicamentos entrega la farmacia de la clínica?",
        "answer": "Los medicamentos indicados en tu consulta en la clínica, genéricos o de marca, y productos de venta libre para gripe, tos, dolor, alergias, estómago y vitaminas."
      },
      {
        "question": "¿Me explican cómo tomar el medicamento?",
        "answer": "Sí. Antes de irte se te explica en español la dosis, el horario, cuántos días tomarlo y qué evitar, y puedes aclarar cualquier duda sobre lo que te indicaron en la consulta."
      },
      {
        "question": "¿Venden productos para la gripe o el dolor aunque no pase a consulta?",
        "answer": "Sí, los productos de venta libre para gripe, tos, dolor, alergias o estómago están disponibles en el horario de la clínica. Si los síntomas son fuertes, conviene pasar a consulta para las pruebas rápidas de flu o COVID."
      },
      {
        "question": "¿Qué horario tiene la farmacia y cómo pago?",
        "answer": "Funciona junto con la clínica: abre a las 9 AM todos los días y cierra a las 9 PM entre lunes y sábado, o a las 5 PM el domingo. Pagas ahí mismo en efectivo, con tarjeta o desde el celular."
      },
      {
        "question": "¿Por qué conviene recoger el tratamiento en la clínica?",
        "answer": "Resuelves todo en una sola visita: te atiende el equipo médico, te indica el tratamiento y sales con él en la mano, sin ir a otra farmacia. El personal conoce tu consulta y aclara dudas en el momento."
      }
    ],
    "faqsEn": [
      {
        "question": "Which medications does the clinic pharmacy hand out?",
        "answer": "The medications prescribed during your visit at the clinic, generic or brand name, plus over-the-counter products for colds, cough, pain, allergies, stomach trouble and vitamins."
      },
      {
        "question": "Does anyone go over the dosing with me before I leave?",
        "answer": "Yes. Before you leave, the dose, timing, how many days to take it and what to avoid are explained in Spanish, and you can clear up any question about what you were prescribed in the visit."
      },
      {
        "question": "Can I buy something over the counter without a visit?",
        "answer": "Yes, over-the-counter products for colds, cough, pain, allergies or stomach trouble are available during clinic hours. If your symptoms are strong, it is worth seeing the medical team for a rapid flu or COVID test."
      },
      {
        "question": "What are the pharmacy hours and how do I pay?",
        "answer": "It runs alongside the clinic: doors open at 9 AM every day and close at 9 PM Monday to Saturday, or 5 PM on Sunday. You pay right there with cash, a card or your phone."
      },
      {
        "question": "Why pick up my treatment at the clinic?",
        "answer": "Everything gets done in one trip: the medical team sees you, prescribes the treatment and you leave with it in hand, with no stop at another pharmacy. Staff know about your visit and can answer questions on the spot."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
