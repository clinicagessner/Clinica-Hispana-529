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
        "question": "¿Cada cuánto debo hacerme exámenes de control?",
        "answer": "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I get control labs?",
        "answer": "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Qué prueba se usa para revisar la tiroides?",
        "answer": "Usamos principalmente la TSH y, si es necesario, T3 y T4 para evaluar cómo funciona tu tiroides."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What test is used to check the thyroid?",
        "answer": "We mainly use TSH and, if needed, T3 and T4 to evaluate how your thyroid is working."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Tratan alergias en la piel y respiratorias?",
        "answer": "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón)."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat both skin and respiratory allergies?",
        "answer": "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching)."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Hacen prueba de flu y de COVID el mismo día?",
        "answer": "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you test for flu and COVID the same day?",
        "answer": "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Llenan el formulario de la escuela o el equipo?",
        "answer": "Sí, trae el formulario de tu escuela o equipo deportivo y lo completamos durante la visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you fill out the school or team form?",
        "answer": "Yes, bring your school or sports-team form and we complete it during the visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
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
        "question": "¿Qué tan confiable es la prueba de embarazo?",
        "answer": "Nuestras pruebas son confiables y las confirma personal médico; también podemos orientarte sobre los siguientes pasos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How reliable is the pregnancy test?",
        "answer": "Our tests are reliable and confirmed by medical staff; we can also guide you on next steps."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos ofrecen?",
        "answer": "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What contraceptive methods do you offer?",
        "answer": "We offer guidance, birth control pills and the injection, and help you choose the right method for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele la extracción del implante?",
        "answer": "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
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
        "question": "¿Cómo se toma la muestra de heces?",
        "answer": "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How is the stool sample collected?",
        "answer": "We give you a container and clear instructions to collect the sample at home and bring it to the clinic."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Cuánto tarda el resultado del strep test?",
        "answer": "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the strep test take?",
        "answer": "The rapid strep test gives a result in just a few minutes during your visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Tengo que regresar para leer la prueba de TB?",
        "answer": "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to come back to read the TB test?",
        "answer": "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Las pruebas son confidenciales?",
        "answer": "Sí, todas las pruebas de STD son completamente confidenciales y se realizan con respeto y sin juicios."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the testing confidential?",
        "answer": "Yes, all STD testing is completely confidential and done with respect and without judgment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Entregan documentación para el trabajo?",
        "answer": "Sí, te entregamos la documentación del resultado para tu empleador o trámite."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you provide documentation for work?",
        "answer": "Yes, we give you documentation of the result for your employer or paperwork."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿El electrocardiograma duele?",
        "answer": "No, es un estudio rápido y sin dolor; solo se colocan electrodos en la piel por unos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does the EKG hurt?",
        "answer": "No, it's a fast, painless test; electrodes are simply placed on the skin for a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿El ultrasonido tiene radiación?",
        "answer": "No, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does ultrasound use radiation?",
        "answer": "No, ultrasound uses no radiation, so it's safe even during pregnancy."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
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
        "question": "¿Qué vacunas aplican?",
        "answer": "Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico; pregúntanos cuál te conviene."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Which vaccines do you give?",
        "answer": "We administer the influenza (flu) vaccine and tetanus toxoid; ask us which one you need."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Quién aplica el suero vitaminado?",
        "answer": "Lo aplica y supervisa personal médico, tras una breve evaluación para elegir el suero adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Who administers the vitamin IV?",
        "answer": "It's administered and monitored by medical staff, after a brief evaluation to choose the right drip for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Atienden heridas sin cita?",
        "answer": "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat wounds without an appointment?",
        "answer": "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Hacen cambios de vendaje y seguimiento?",
        "answer": "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do dressing changes and follow-up?",
        "answer": "Yes, we clean, treat and change the dressings, and follow up until the wound heals."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué cirugías menores realizan?",
        "answer": "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What minor surgeries do you perform?",
        "answer": "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿El drenaje de un absceso duele?",
        "answer": "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does abscess drainage hurt?",
        "answer": "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Cómo tratan la uña encarnada?",
        "answer": "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How do you treat an ingrown toenail?",
        "answer": "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo surtir mi receta en la clínica?",
        "answer": "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a sábado de 9 AM a 9 PM y domingo de 9 AM a 5 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I fill my prescription at the clinic?",
        "answer": "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday through Saturday from 9 AM to 9 PM, and Sunday from 9 AM to 5 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
