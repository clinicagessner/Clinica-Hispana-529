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
        "question": "¿Cada cuánto debo revisar mi diabetes o mi presión?",
        "answer": "Cada 4 a 6 semanas al iniciar o cambiar un medicamento, y cada 3 a 6 meses cuando la condición está controlada. La A1c se mide cada 3 meses hasta alcanzar la meta."
      },
      {
        "question": "¿Tengo que ir en ayunas?",
        "answer": "Sí, de 8 a 12 horas, si te van a medir glucosa y colesterol. Puedes tomar agua y, salvo indicación contraria, tus medicamentos habituales."
      },
      {
        "question": "¿Pueden recetar y ajustar mis medicamentos?",
        "answer": "Sí. El médico inicia o ajusta el tratamiento según tus análisis y puedes surtir la receta en la farmacia de la clínica al terminar la consulta."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I check my diabetes or blood pressure?",
        "answer": "Every 4 to 6 weeks when starting or changing a medication, and every 3 to 6 months once the condition is controlled. A1c is measured every 3 months until the target is reached."
      },
      {
        "question": "Do I need to fast?",
        "answer": "Yes, 8 to 12 hours, if glucose and cholesterol will be drawn. You can drink water and, unless told otherwise, take your usual medications."
      },
      {
        "question": "Can you prescribe and adjust my medications?",
        "answer": "Yes. The doctor starts or adjusts treatment based on your labs and you can fill the prescription at the clinic pharmacy right after the visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Necesito ayuno para la prueba de tiroides?",
        "answer": "No. La TSH y la T4 se pueden tomar a cualquier hora. Si ya tomas levotiroxina, toma la pastilla después de la extracción para que el resultado sea más preciso."
      },
      {
        "question": "¿Cuándo se repite la prueba después de empezar el tratamiento?",
        "answer": "A las 6 u 8 semanas de iniciar o cambiar la dosis. Cuando el nivel se estabiliza, el control es cada 6 a 12 meses."
      },
      {
        "question": "¿Hacen ultrasonido de tiroides?",
        "answer": "Sí. La clínica cuenta con ultrasonido para evaluar el tamaño de la glándula y detectar nódulos cuando el médico lo considera necesario."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast for a thyroid test?",
        "answer": "No. TSH and T4 can be drawn at any time. If you already take levothyroxine, take the pill after the blood draw for a more accurate result."
      },
      {
        "question": "When is the test repeated after starting treatment?",
        "answer": "6 to 8 weeks after starting or changing the dose. Once the level is stable, follow-up is every 6 to 12 months."
      },
      {
        "question": "Do you do thyroid ultrasound?",
        "answer": "Yes. The clinic has ultrasound to evaluate the size of the gland and detect nodules when the doctor considers it necessary."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Hacen pruebas cutáneas de alergia?",
        "answer": "La clínica evalúa los síntomas y los desencadenantes y trata la alergia. Cuando se requieren pruebas cutáneas o vacunas de alergia, te referimos a un alergólogo."
      },
      {
        "question": "¿Qué medicamento me van a dar?",
        "answer": "Depende de los síntomas: antihistamínicos que no dan sueño, aerosol nasal de esteroide para la congestión, gotas para los ojos o cremas para la piel. Puedes surtirlos en la farmacia de la clínica."
      },
      {
        "question": "¿Cuándo es peor la alergia en Houston?",
        "answer": "En primavera por el polen de roble, en otoño por la ambrosía y de diciembre a febrero por el cedro de montaña. El moho y los ácaros afectan todo el año."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do allergy skin testing?",
        "answer": "The clinic evaluates symptoms and triggers and treats the allergy. When skin testing or allergy shots are needed, we refer you to an allergist."
      },
      {
        "question": "What medication will I get?",
        "answer": "It depends on the symptoms: non-drowsy antihistamines, a steroid nasal spray for congestion, eye drops or skin creams. You can fill them at the clinic pharmacy."
      },
      {
        "question": "When are allergies worst in Houston?",
        "answer": "In spring from oak pollen, in fall from ragweed, and December to February from mountain cedar. Mold and dust mites affect people year-round."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿En cuánto tiempo sale el resultado de la prueba de flu o COVID?",
        "answer": "En unos 15 minutos. Son pruebas rápidas de hisopado nasal que se procesan en la clínica y el médico te da el tratamiento en la misma visita."
      },
      {
        "question": "¿Cuándo conviene hacerse la prueba?",
        "answer": "La de influenza en los primeros 3 a 4 días de síntomas; la de COVID desde el primer día con síntomas o 5 días después de un contacto cercano."
      },
      {
        "question": "¿Me van a dar antibiótico?",
        "answer": "Solo si hay infección bacteriana, como faringitis por estreptococo o sinusitis. La gripe y el resfriado son virales y se tratan con antivirales o con medicamentos para los síntomas."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How fast is the flu or COVID test result?",
        "answer": "About 15 minutes. They are rapid nasal swab tests processed in the clinic, and the doctor gives you treatment in the same visit."
      },
      {
        "question": "When should I get tested?",
        "answer": "The flu test within the first 3 to 4 days of symptoms; the COVID test from the first day of symptoms or 5 days after close contact."
      },
      {
        "question": "Will I get antibiotics?",
        "answer": "Only if there is a bacterial infection, such as strep throat or sinusitis. Flu and colds are viral and are treated with antivirals or symptom medication."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Me entregan el formulario firmado el mismo día?",
        "answer": "Sí. Trae el formulario de la escuela o liga con la parte del padre o tutor ya llenada, y el médico lo completa y firma en la misma visita."
      },
      {
        "question": "¿Cada cuánto se necesita el examen deportivo?",
        "answer": "En Texas, el formulario de la UIL se exige cada año para deportes de secundaria y preparatoria. Otras ligas y escuelas fijan su propio plazo, normalmente de un año."
      },
      {
        "question": "¿Debe venir un adulto con el estudiante?",
        "answer": "Sí. Los menores de 18 años deben venir acompañados por un padre o tutor, que además firma la sección de historial del formulario."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I get the signed form the same day?",
        "answer": "Yes. Bring the school or league form with the parent section already filled out, and the doctor completes and signs it in the same visit."
      },
      {
        "question": "How often is the sports physical needed?",
        "answer": "In Texas, the UIL form is required every year for middle and high school sports. Other leagues and schools set their own deadline, usually one year."
      },
      {
        "question": "Does an adult need to come with the student?",
        "answer": "Yes. Anyone under 18 must be accompanied by a parent or guardian, who also signs the history section of the form."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo hacerme el Papanicolaou?",
        "answer": "De los 21 a los 29 años cada 3 años, y de los 30 a los 65 cada 3 años o cada 5 si se combina con la prueba de VPH. Tras un resultado anormal el médico indica controles más frecuentes."
      },
      {
        "question": "¿Puedo hacerme el Papanicolaou con la menstruación?",
        "answer": "Es mejor evitar los días de sangrado abundante porque puede alterar la muestra. Con sangrado leve sí se puede realizar; consúltalo al llegar."
      },
      {
        "question": "¿Duele el Papanicolaou?",
        "answer": "No debería doler. Puede causar una molestia leve durante los 2 a 5 minutos que dura la toma de la muestra, y puedes continuar tu día con normalidad."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I get a Pap smear?",
        "answer": "From 21 to 29 every 3 years, and from 30 to 65 every 3 years or every 5 when combined with an HPV test. After an abnormal result your doctor schedules closer follow-up."
      },
      {
        "question": "Can I get a Pap smear during my period?",
        "answer": "It is best to avoid days with heavy bleeding because it can affect the sample. With light bleeding it can be done; ask when you arrive."
      },
      {
        "question": "Does a Pap smear hurt?",
        "answer": "It should not hurt. It may cause mild discomfort during the 2 to 5 minutes it takes to collect the sample, and you can go on with your day normally."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿Desde cuándo es confiable la prueba de embarazo?",
        "answer": "La de orina desde el primer día de retraso menstrual. La de sangre detecta el embarazo desde 6 a 8 días después de la ovulación, antes de que falte la regla."
      },
      {
        "question": "¿En cuánto tiempo sale el resultado?",
        "answer": "La prueba de orina da resultado en minutos y el médico lo confirma en la misma visita. La de sangre puede requerir más tiempo según el laboratorio."
      },
      {
        "question": "¿Pueden confirmar el embarazo con ultrasonido?",
        "answer": "Sí. La clínica cuenta con ultrasonido para confirmar el embarazo y calcular las semanas, normalmente a partir de la semana 6."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How early is the pregnancy test reliable?",
        "answer": "The urine test from the first day of a missed period. The blood test detects pregnancy from 6 to 8 days after ovulation, before a missed period."
      },
      {
        "question": "How fast is the result?",
        "answer": "The urine test gives a result in minutes and the doctor confirms it in the same visit. The blood test may take longer depending on the lab."
      },
      {
        "question": "Can you confirm the pregnancy with ultrasound?",
        "answer": "Yes. The clinic has ultrasound to confirm the pregnancy and calculate the weeks, usually from week 6."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos tienen en la clínica?",
        "answer": "Pastillas anticonceptivas e inyección trimestral, además del retiro de implante subdérmico. Para implante, DIU o métodos permanentes te orientamos y referimos."
      },
      {
        "question": "¿Cada cuánto se pone la inyección anticonceptiva?",
        "answer": "Cada 12 a 13 semanas. Aplicada a tiempo tiene una eficacia mayor al 99%. Puede causar sangrado irregular al inicio o ausencia de menstruación."
      },
      {
        "question": "¿Cuándo empieza a proteger la pastilla?",
        "answer": "De inmediato si la empiezas en los primeros 5 días de la menstruación. Si la empiezas en otro momento, usa condón durante los primeros 7 días."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Which birth control methods does the clinic offer?",
        "answer": "Birth control pills and the quarterly injection, plus subdermal implant removal. For implant, IUD or permanent methods we guide and refer you."
      },
      {
        "question": "How often is the contraceptive injection given?",
        "answer": "Every 12 to 13 weeks. Given on time it is over 99% effective. It may cause irregular bleeding at first or stop your period."
      },
      {
        "question": "When does the pill start protecting?",
        "answer": "Immediately if you start it within the first 5 days of your period. If you start at another time, use condoms for the first 7 days."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Cuánto dura el retiro del implante?",
        "answer": "De 5 a 10 minutos. Se hace con anestesia local, una incisión de 2 a 3 milímetros y sin puntos; sales con una venda compresiva."
      },
      {
        "question": "¿Cuándo debo retirar el implante?",
        "answer": "A los 3 años de uso, que es el tiempo aprobado, o antes si quieres embarazarte, cambiar de método o tienes efectos secundarios que no toleras."
      },
      {
        "question": "¿Puedo empezar otro método el mismo día?",
        "answer": "Sí. La fertilidad puede regresar en semanas, así que en la misma consulta se puede recetar la pastilla o aplicar la inyección anticonceptiva."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does implant removal take?",
        "answer": "5 to 10 minutes. It is done with local anesthesia, a 2 to 3 millimeter incision and no stitches; you leave with a pressure bandage."
      },
      {
        "question": "When should I have the implant removed?",
        "answer": "At 3 years of use, the approved duration, or earlier if you want to get pregnant, switch methods or have side effects you cannot tolerate."
      },
      {
        "question": "Can I start another method the same day?",
        "answer": "Yes. Fertility can return within weeks, so in the same visit the pill can be prescribed or the contraceptive injection given."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Qué incluye el examen del hombre?",
        "answer": "Antígeno prostático (PSA) y testosterona en sangre, signos vitales y consulta médica en español, con referencia a urólogo si se requiere."
      },
      {
        "question": "¿A qué edad debo hacerme el PSA?",
        "answer": "Las guías sugieren hablarlo con el médico entre los 55 y 69 años, o desde los 45 si tienes familiares directos con cáncer de próstata o eres afroamericano."
      },
      {
        "question": "¿Cómo me preparo para el PSA?",
        "answer": "Evita la eyaculación 48 horas antes y espera a terminar cualquier tratamiento por infección urinaria o de próstata, porque ambos pueden elevar el resultado."
      },
      {
        "question": "¿Un PSA alto significa cáncer?",
        "answer": "No necesariamente. Una próstata agrandada, una inflamación o una infección también lo elevan. El médico valora el resultado y, si hace falta, repite la prueba o te refiere al urólogo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the men's exam include?",
        "answer": "PSA and testosterone blood tests, vital signs and a medical consultation in Spanish, with a urologist referral if needed."
      },
      {
        "question": "At what age should I get a PSA test?",
        "answer": "Guidelines suggest discussing it with your doctor between ages 55 and 69, or from 45 if you have close relatives with prostate cancer or are African American."
      },
      {
        "question": "How do I prepare for the PSA test?",
        "answer": "Avoid ejaculation for 48 hours before and wait until any urinary or prostate infection treatment is finished, since both can raise the result."
      },
      {
        "question": "Does a high PSA mean cancer?",
        "answer": "Not necessarily. An enlarged prostate, inflammation or infection also raise it. The doctor evaluates the result and, if needed, repeats the test or refers you to a urologist."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿En cuánto tiempo entregan los resultados?",
        "answer": "En la mayoría de los casos los resultados están listos el mismo día o en pocos días, según el tipo de prueba, y te los explicamos en español."
      },
      {
        "question": "¿Tengo que ir en ayunas?",
        "answer": "Para glucosa, colesterol y química completa sí, de 8 a 12 horas; puedes tomar agua. Biometría, tiroides, A1c y la mayoría de las hormonas no requieren ayuno."
      },
      {
        "question": "¿Necesito orden médica para hacerme análisis?",
        "answer": "No es necesaria. Puedes pedir el análisis que necesitas o consultar con el médico de la clínica, que te indicará las pruebas adecuadas."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How soon are results ready?",
        "answer": "In most cases results are ready the same day or within a few days, depending on the test, and we explain them to you in Spanish."
      },
      {
        "question": "Do I have to fast?",
        "answer": "For glucose, cholesterol and full chemistry yes, 8 to 12 hours; water is fine. CBC, thyroid, A1c and most hormone tests do not require fasting."
      },
      {
        "question": "Do I need a doctor's order for blood work?",
        "answer": "No. You can request the test you need or see the clinic doctor, who will indicate the right tests."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Puedo recibir tratamiento el mismo día?",
        "answer": "Sí. El examen de orina se procesa en minutos en la clínica y, si hay infección, sales con tu receta de antibiótico el mismo día."
      },
      {
        "question": "¿Cuánto tarda en quitarse una infección urinaria?",
        "answer": "Los síntomas mejoran en 1 a 2 días de antibiótico, pero el tratamiento dura de 3 a 7 días y debe completarse. Si no mejoras en 48 horas, regresa a la clínica."
      },
      {
        "question": "¿Cuándo es urgente una infección urinaria?",
        "answer": "Cuando hay fiebre, escalofríos, dolor en la espalda baja, vómito o sangre en la orina. Esos signos pueden indicar que la infección llegó a los riñones."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get treatment the same day?",
        "answer": "Yes. The urine test is processed in minutes at the clinic and, if there is an infection, you leave with your antibiotic prescription the same day."
      },
      {
        "question": "How long does it take for a UTI to go away?",
        "answer": "Symptoms improve within 1 to 2 days of antibiotics, but treatment lasts 3 to 7 days and must be completed. If you do not improve within 48 hours, come back to the clinic."
      },
      {
        "question": "When is a UTI urgent?",
        "answer": "When there is fever, chills, lower-back pain, vomiting or blood in the urine. Those signs may mean the infection has reached the kidneys."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Cómo debo recoger la muestra de heces?",
        "answer": "En un recipiente limpio con tapa, sin que toque el agua del inodoro ni se mezcle con orina. Entrégala en la clínica en las siguientes 2 horas o refrigérala hasta 24 horas."
      },
      {
        "question": "¿Necesito ayuno o alguna preparación?",
        "answer": "No requiere ayuno. Evita laxantes, antiácidos y antidiarreicos 48 horas antes. Para sangre oculta, suspende carne roja y antiinflamatorios 3 días antes."
      },
      {
        "question": "¿Por qué a veces piden 3 muestras?",
        "answer": "Porque los parásitos no se eliminan todos los días. Tres muestras de días distintos aumentan la posibilidad de detectarlos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How should I collect the stool sample?",
        "answer": "In a clean container with a lid, without touching toilet water or mixing with urine. Bring it to the clinic within 2 hours or refrigerate it for up to 24 hours."
      },
      {
        "question": "Do I need to fast or prepare?",
        "answer": "No fasting is required. Avoid laxatives, antacids and antidiarrheals for 48 hours before. For occult blood, stop red meat and anti-inflammatories 3 days before."
      },
      {
        "question": "Why are 3 samples sometimes requested?",
        "answer": "Because parasites are not shed every day. Three samples from different days increase the chance of detecting them."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿En cuánto tiempo sale el resultado del strep test?",
        "answer": "En 5 a 10 minutos. La prueba se procesa en la clínica y, si es positiva, sales con la receta de antibiótico en la misma visita."
      },
      {
        "question": "¿Cuándo puedo volver a la escuela o al trabajo?",
        "answer": "24 horas después de la primera dosis de antibiótico, siempre que ya no tengas fiebre. Completa los 10 días de tratamiento aunque te sientas bien."
      },
      {
        "question": "¿Si la prueba es negativa puede ser estreptococo?",
        "answer": "En pocos casos sí, sobre todo en niños. Si los síntomas son muy sugestivos, el médico puede enviar un cultivo de garganta, con resultado en 24 a 48 horas."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How fast is the strep test result?",
        "answer": "5 to 10 minutes. The test is processed in the clinic and, if positive, you leave with the antibiotic prescription in the same visit."
      },
      {
        "question": "When can I go back to school or work?",
        "answer": "24 hours after the first antibiotic dose, as long as you no longer have a fever. Complete the 10 days of treatment even if you feel well."
      },
      {
        "question": "Can it still be strep if the test is negative?",
        "answer": "In a few cases yes, especially in children. If symptoms are very suggestive, the doctor may send a throat culture, with results in 24 to 48 hours."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Cuántas visitas necesito para la prueba de tuberculosis?",
        "answer": "Con la prueba cutánea PPD, dos: la aplicación y la lectura entre 48 y 72 horas después. Con la prueba de sangre IGRA, una sola visita."
      },
      {
        "question": "¿La vacuna BCG afecta el resultado?",
        "answer": "Puede dar un falso positivo en la prueba cutánea PPD. Si te vacunaste con BCG, la prueba de sangre IGRA es más confiable y es la que acepta USCIS."
      },
      {
        "question": "¿Qué pasa si la prueba sale positiva?",
        "answer": "Indica contacto previo con la bacteria, no necesariamente enfermedad. Se hace una radiografía de tórax y una evaluación; la tuberculosis latente no contagia y tiene tratamiento preventivo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How many visits does the tuberculosis test take?",
        "answer": "With the PPD skin test, two: placement and the reading 48 to 72 hours later. With the IGRA blood test, a single visit."
      },
      {
        "question": "Does the BCG vaccine affect the result?",
        "answer": "It can cause a false positive on the PPD skin test. If you had the BCG vaccine, the IGRA blood test is more reliable and is the one USCIS accepts."
      },
      {
        "question": "What happens if the test is positive?",
        "answer": "It indicates previous contact with the bacteria, not necessarily disease. A chest X-ray and an evaluation are done; latent tuberculosis is not contagious and has preventive treatment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Las pruebas de ETS son confidenciales?",
        "answer": "Sí. La consulta es privada, los resultados se entregan solo a ti y nada se comparte con empleadores, familiares ni terceros."
      },
      {
        "question": "¿Cuánto debo esperar después del contacto para hacerme la prueba?",
        "answer": "Clamidia y gonorrea de 1 a 2 semanas; VIH de 18 a 45 días; sífilis de 3 a 6 semanas. Si fue reciente, se puede hacer ahora y repetir al cumplir el plazo."
      },
      {
        "question": "¿Dan el tratamiento en la clínica?",
        "answer": "Sí. Clamidia, gonorrea, sífilis y tricomonas se tratan con antibióticos que puedes surtir en la farmacia de la clínica. Para VIH te referimos a atención especializada."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is STD testing confidential?",
        "answer": "Yes. The visit is private, results are given only to you, and nothing is shared with employers, family or third parties."
      },
      {
        "question": "How long after exposure should I wait to get tested?",
        "answer": "Chlamydia and gonorrhea 1 to 2 weeks; HIV 18 to 45 days; syphilis 3 to 6 weeks. If it was recent, you can test now and repeat once the window has passed."
      },
      {
        "question": "Do you provide treatment at the clinic?",
        "answer": "Yes. Chlamydia, gonorrhea, syphilis and trichomonas are treated with antibiotics you can fill at the clinic pharmacy. For HIV we refer you to specialized care."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿En cuánto tiempo está el resultado?",
        "answer": "El resultado rápido de orina está en minutos. Si el empleador exige confirmación de laboratorio, tarda de 1 a 3 días hábiles."
      },
      {
        "question": "¿Qué debo traer a la prueba de drogas?",
        "answer": "Identificación con foto vigente, el formulario del empleador si te lo dieron y la lista de tus medicamentos recetados."
      },
      {
        "question": "¿Sirve para el programa DOT de conductores comerciales?",
        "answer": "Las pruebas del programa DOT se hacen a través del empleador o su consorcio. Aquí realizamos el examen físico DOT y pruebas de drogas y alcohol para otros empleos y trámites."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How soon is the result ready?",
        "answer": "The rapid urine result is ready in minutes. If the employer requires lab confirmation, it takes 1 to 3 business days."
      },
      {
        "question": "What should I bring to the drug test?",
        "answer": "A valid photo ID, the employer's form if you were given one, and your list of prescription medications."
      },
      {
        "question": "Does it work for the DOT commercial driver program?",
        "answer": "DOT program tests are done through the employer or its consortium. Here we perform the DOT physical exam and drug and alcohol tests for other jobs and paperwork."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿Cuánto dura el electrocardiograma?",
        "answer": "De 5 a 10 minutos en total, incluyendo la colocación de los electrodos. El registro en sí dura unos 10 segundos y el médico lo interpreta en la misma visita."
      },
      {
        "question": "¿Necesito ayuno o preparación para el EKG?",
        "answer": "No. Solo evita cremas o aceites en el pecho, no hagas ejercicio intenso justo antes y trae la lista de tus medicamentos."
      },
      {
        "question": "¿El electrocardiograma duele o da corriente?",
        "answer": "No. Los electrodos solo leen la actividad eléctrica del corazón; no emiten corriente. Puede sentirse frío el gel o un ligero tirón al retirar los adhesivos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the electrocardiogram take?",
        "answer": "5 to 10 minutes in total, including electrode placement. The recording itself lasts about 10 seconds and the doctor reads it in the same visit."
      },
      {
        "question": "Do I need to fast or prepare for the EKG?",
        "answer": "No. Just avoid creams or oils on your chest, do not exercise hard right before, and bring your medication list."
      },
      {
        "question": "Does the electrocardiogram hurt or give a shock?",
        "answer": "No. The electrodes only read the heart's electrical activity; they emit no current. The gel may feel cold or the adhesives may tug slightly when removed."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿Necesito ayuno para el ultrasonido?",
        "answer": "Para el abdominal sí, de 6 a 8 horas. Para el pélvico y el de embarazo temprano necesitas la vejiga llena. El de tiroides no requiere preparación."
      },
      {
        "question": "¿Cuánto dura el ultrasonido?",
        "answer": "Entre 15 y 30 minutos según la zona. El médico revisa las imágenes y te explica los hallazgos en la misma visita."
      },
      {
        "question": "¿El ultrasonido es seguro durante el embarazo?",
        "answer": "Sí. Usa ondas de sonido y no radiación, por lo que es seguro para la madre y el bebé y puede repetirse las veces necesarias."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast for the ultrasound?",
        "answer": "For the abdominal one yes, 6 to 8 hours. For pelvic and early pregnancy you need a full bladder. Thyroid requires no preparation."
      },
      {
        "question": "How long does the ultrasound take?",
        "answer": "15 to 30 minutes depending on the area. The doctor reviews the images and explains the findings in the same visit."
      },
      {
        "question": "Is ultrasound safe during pregnancy?",
        "answer": "Yes. It uses sound waves and no radiation, so it is safe for mother and baby and can be repeated as often as needed."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿Me entregan el certificado DOT el mismo día?",
        "answer": "Sí. Si cumples los requisitos de la FMCSA, recibes el certificado médico al terminar el examen, en la misma visita."
      },
      {
        "question": "¿Cuánto tiempo es válido el certificado DOT?",
        "answer": "Hasta 24 meses. Con presión alta, diabetes u otra condición que requiere seguimiento, el examinador puede emitirlo por 3 meses a 1 año."
      },
      {
        "question": "¿El examen DOT incluye prueba de drogas?",
        "answer": "No. El examen de orina del DOT solo mide proteína, azúcar y sangre. La prueba de drogas es un servicio aparte que también ofrece la clínica."
      },
      {
        "question": "¿Qué debo traer al examen DOT?",
        "answer": "Licencia vigente, lentes o aparato auditivo si los usas, lista de medicamentos y, si tienes diabetes, presión alta, problemas del corazón o apnea del sueño, los registros de tu médico."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I get the DOT certificate the same day?",
        "answer": "Yes. If you meet FMCSA requirements, you receive the medical certificate when the exam is done, in the same visit."
      },
      {
        "question": "How long is the DOT certificate valid?",
        "answer": "Up to 24 months. With high blood pressure, diabetes or another condition that needs follow-up, the examiner may issue it for 3 months to 1 year."
      },
      {
        "question": "Does the DOT exam include a drug test?",
        "answer": "No. The DOT urine test only checks protein, sugar and blood. Drug testing is a separate service the clinic also offers."
      },
      {
        "question": "What should I bring to the DOT exam?",
        "answer": "A valid license, glasses or hearing aid if you use them, your medication list and, if you have diabetes, high blood pressure, heart problems or sleep apnea, records from your doctor."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿El médico está autorizado por USCIS?",
        "answer": "Sí. El examen lo realiza un médico autorizado (civil surgeon) y te entregamos el Formulario I-693 completado y sellado, con una copia para ti."
      },
      {
        "question": "¿Cuántas visitas necesito para el I-693?",
        "answer": "Normalmente dos: en la primera se hace el examen físico, la extracción de sangre y la revisión de vacunas; cuando llegan los resultados se completa y sella el formulario."
      },
      {
        "question": "¿Qué debo traer al examen de inmigración?",
        "answer": "Pasaporte o identificación con foto, registro de vacunas con traducción al inglés si aplica, registros médicos relevantes y el número de recibo de tu caso si USCIS ya te pidió el examen."
      },
      {
        "question": "¿Puedo abrir el sobre del I-693?",
        "answer": "No. USCIS solo acepta el formulario en el sobre sellado por el civil surgeon. Guarda la copia que te entregamos para tu archivo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the doctor authorized by USCIS?",
        "answer": "Yes. The exam is performed by an authorized civil surgeon and we give you Form I-693 completed and sealed, with a copy for your records."
      },
      {
        "question": "How many visits does the I-693 take?",
        "answer": "Usually two: the first for the physical exam, blood draw and vaccine review; once results arrive, the form is completed and sealed."
      },
      {
        "question": "What should I bring to the immigration exam?",
        "answer": "Passport or photo ID, vaccination records with an English translation if needed, relevant medical records and your case receipt number if USCIS has already requested the exam."
      },
      {
        "question": "Can I open the I-693 envelope?",
        "answer": "No. USCIS only accepts the form in the envelope sealed by the civil surgeon. Keep the copy we give you for your files."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Cuándo es mejor ponerse la vacuna de la influenza?",
        "answer": "Entre septiembre y octubre, antes de la temporada. La protección tarda unas 2 semanas en desarrollarse, y sigue valiendo la pena vacunarse más tarde si no lo hiciste."
      },
      {
        "question": "¿Cada cuánto necesito el refuerzo del tétanos?",
        "answer": "Cada 10 años. Con una herida sucia o profunda, se aplica antes si pasaron más de 5 años. En el embarazo se recomienda Tdap entre las semanas 27 y 36."
      },
      {
        "question": "¿Aplican las vacunas para el examen de inmigración?",
        "answer": "Sí. La clínica realiza el examen I-693 con médico autorizado y aplica las vacunas que falten según tu edad y tu registro previo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "When is the best time to get the flu vaccine?",
        "answer": "Between September and October, before the season. Protection takes about 2 weeks to develop, and it is still worth getting later if you missed it."
      },
      {
        "question": "How often do I need a tetanus booster?",
        "answer": "Every 10 years. With a dirty or deep wound, it is given sooner if more than 5 years have passed. In pregnancy, Tdap is recommended between weeks 27 and 36."
      },
      {
        "question": "Do you give the vaccines for the immigration exam?",
        "answer": "Yes. The clinic performs the I-693 exam with an authorized physician and gives any missing vaccines based on your age and previous record."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Cuánto dura la aplicación del suero vitaminado?",
        "answer": "Entre 30 y 60 minutos, sentado o recostado, con supervisión del personal médico. Antes se hace una evaluación breve para confirmar que es adecuado para ti."
      },
      {
        "question": "¿Quién no debe recibir un suero vitaminado?",
        "answer": "Personas con insuficiencia renal o cardiaca, presión muy alta o alergia a algún componente. Por eso el médico te evalúa antes de aplicarlo."
      },
      {
        "question": "¿Qué vitaminas lleva el suero?",
        "answer": "Según la necesidad, se añaden complejo B, vitamina B12, vitamina C y magnesio a un suero de hidratación. El médico elige la combinación en la evaluación."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the vitamin drip take?",
        "answer": "30 to 60 minutes, sitting or lying down, supervised by medical staff. A brief evaluation is done first to confirm it is appropriate for you."
      },
      {
        "question": "Who should not receive a vitamin drip?",
        "answer": "People with kidney or heart failure, very high blood pressure or allergy to any component. That is why the doctor evaluates you before giving it."
      },
      {
        "question": "Which vitamins are in the drip?",
        "answer": "Depending on the need, B complex, vitamin B12, vitamin C and magnesium are added to a hydration drip. The doctor chooses the combination during the evaluation."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Cuánto tiempo tengo para que me pongan puntos?",
        "answer": "Lo ideal es dentro de las primeras 6 a 8 horas. En la cara y el cuero cabelludo se puede cerrar hasta 24 horas después de la lesión."
      },
      {
        "question": "¿Cuándo se quitan los puntos?",
        "answer": "En la cara a los 5 a 7 días, en el cuero cabelludo a los 7 a 10, y en brazos, tronco, piernas y articulaciones a los 10 a 14 días. El retiro se hace en la clínica."
      },
      {
        "question": "¿Me ponen la vacuna del tétanos?",
        "answer": "Sí, si han pasado más de 5 años desde tu último refuerzo o no recuerdas la fecha. Se aplica en la misma visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long do I have to get stitches?",
        "answer": "Ideally within the first 6 to 8 hours. On the face and scalp the wound can be closed up to 24 hours after the injury."
      },
      {
        "question": "When are the stitches removed?",
        "answer": "On the face at 5 to 7 days, on the scalp at 7 to 10, and on arms, trunk, legs and joints at 10 to 14 days. Removal is done at the clinic."
      },
      {
        "question": "Will I get a tetanus shot?",
        "answer": "Yes, if more than 5 years have passed since your last booster or you do not remember the date. It is given in the same visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo cambiar el vendaje?",
        "answer": "Las heridas que drenan mucho pueden requerir cambio diario y las limpias cada 2 o 3 días. El médico define la frecuencia en la primera visita y los cambios se hacen en la clínica."
      },
      {
        "question": "¿Cuáles son los signos de que la herida está infectada?",
        "answer": "Enrojecimiento que se extiende, calor, hinchazón, pus, mal olor, dolor que aumenta o fiebre. Con cualquiera de ellos, acude el mismo día."
      },
      {
        "question": "¿Atienden úlceras del pie diabético?",
        "answer": "Sí. Se revisan al menos una vez por semana, con limpieza, retiro de tejido muerto, apósitos adecuados y control de la glucosa junto con el médico."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I change the dressing?",
        "answer": "Wounds that drain a lot may need daily changes and clean ones every 2 or 3 days. The doctor sets the frequency at the first visit and changes are done at the clinic."
      },
      {
        "question": "What are the signs that the wound is infected?",
        "answer": "Spreading redness, warmth, swelling, pus, foul odor, increasing pain or fever. With any of these, come in the same day."
      },
      {
        "question": "Do you treat diabetic foot ulcers?",
        "answer": "Yes. They are checked at least once a week, with cleaning, removal of dead tissue, appropriate dressings and glucose control together with the doctor."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Cuánto dura una cirugía menor?",
        "answer": "Entre 20 y 45 minutos, con anestesia local. Sales el mismo día con un vendaje y los puntos se retiran en la clínica entre 7 y 14 días después."
      },
      {
        "question": "¿Analizan el lunar o el quiste que retiran?",
        "answer": "Cuando hay sospecha, la lesión se envía al laboratorio de patología y el resultado tarda de 1 a 2 semanas. El médico te lo explica en la consulta de control."
      },
      {
        "question": "¿Cuándo debo preocuparme por un lunar?",
        "answer": "Si cambia de tamaño, color o forma, tiene bordes irregulares, mide más de 6 milímetros, sangra o pica. Esas señales ameritan evaluación."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does minor surgery take?",
        "answer": "20 to 45 minutes, under local anesthesia. You leave the same day with a bandage and the stitches are removed at the clinic 7 to 14 days later."
      },
      {
        "question": "Do you analyze the mole or cyst you remove?",
        "answer": "When there is suspicion, the lesion is sent to the pathology lab and the result takes 1 to 2 weeks. The doctor explains it at the follow-up visit."
      },
      {
        "question": "When should I worry about a mole?",
        "answer": "If it changes in size, color or shape, has irregular borders, measures more than 6 millimeters, bleeds or itches. Those signs deserve an evaluation."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿Duele el drenaje de un absceso?",
        "answer": "Se hace con anestesia local, así que solo sientes el pinchazo inicial y algo de presión. Al salir el pus, el dolor del absceso disminuye casi de inmediato."
      },
      {
        "question": "¿Necesito antibiótico después del drenaje?",
        "answer": "No siempre. El drenaje es el tratamiento principal. Se receta antibiótico si la piel alrededor está infectada, hay fiebre, el absceso es grande o tienes diabetes."
      },
      {
        "question": "¿Tengo que regresar después del drenaje?",
        "answer": "Sí, a los 2 o 3 días para revisar la herida y retirar o cambiar la gasa interna si se colocó. La herida sana desde adentro en 1 a 2 semanas."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does abscess drainage hurt?",
        "answer": "It is done with local anesthesia, so you only feel the initial pinch and some pressure. Once the pus is out, the abscess pain drops almost immediately."
      },
      {
        "question": "Do I need antibiotics after drainage?",
        "answer": "Not always. Drainage is the main treatment. Antibiotics are prescribed if the surrounding skin is infected, there is fever, the abscess is large or you have diabetes."
      },
      {
        "question": "Do I have to come back after drainage?",
        "answer": "Yes, in 2 or 3 days to check the wound and remove or change the internal gauze if it was placed. The wound heals from the inside in 1 to 2 weeks."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Duele el procedimiento de la uña encarnada?",
        "answer": "Se hace con anestesia local en la base del dedo, así que solo sientes el pinchazo inicial. Toma de 15 a 30 minutos y puedes caminar al salir con zapato abierto."
      },
      {
        "question": "¿Cuándo debo ir a la clínica en vez de tratarla en casa?",
        "answer": "Si hay pus, dolor intenso, piel que crece sobre la uña, si se repite o si tienes diabetes. En etapa temprana los baños de agua tibia con sal pueden ayudar."
      },
      {
        "question": "¿Vuelve a crecer la uña?",
        "answer": "Sí, en varios meses. Para que no se encarne otra vez, córtala recta y usa zapatos con espacio. Si se repite varias veces, hay un procedimiento definitivo para ese borde."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does the ingrown toenail procedure hurt?",
        "answer": "It is done with local anesthesia at the base of the toe, so you only feel the initial pinch. It takes 15 to 30 minutes and you can walk out in an open shoe."
      },
      {
        "question": "When should I go to the clinic instead of treating it at home?",
        "answer": "If there is pus, severe pain, skin growing over the nail, if it keeps coming back or if you have diabetes. Early on, warm salt-water soaks can help."
      },
      {
        "question": "Does the nail grow back?",
        "answer": "Yes, over several months. To keep it from growing in again, cut it straight and wear roomy shoes. If it recurs several times, there is a permanent procedure for that edge."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo surtir mi receta en la clínica?",
        "answer": "Sí. Al terminar la consulta pasas a la farmacia dentro de la clínica, surtes la receta y sales con el tratamiento, con la dosis explicada en español."
      },
      {
        "question": "¿Tienen medicamentos genéricos?",
        "answer": "Sí. Ofrecemos genéricos y de marca. Los genéricos tienen el mismo principio activo a menor costo; puedes preguntar el precio antes de surtir."
      },
      {
        "question": "¿Cuál es el horario de la farmacia?",
        "answer": "El mismo de la clínica: lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; los precios son de pago directo y aceptamos efectivo y tarjetas. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I fill my prescription at the clinic?",
        "answer": "Yes. When your visit ends you go to the pharmacy inside the clinic, fill the prescription and leave with the treatment, with the dose explained in Spanish."
      },
      {
        "question": "Do you have generic medications?",
        "answer": "Yes. We offer generics and brand names. Generics have the same active ingredient at a lower cost; you can ask for the price before filling."
      },
      {
        "question": "What are the pharmacy hours?",
        "answer": "The same as the clinic: Monday through Saturday 9 AM to 9 PM and Sunday 9 AM to 5 PM."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; pricing is self-pay and we accept cash and cards. Ask us about the cost before your visit."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
