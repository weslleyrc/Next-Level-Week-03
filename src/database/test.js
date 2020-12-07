const Database = require('./db');

Database.then(async db => {
    //inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-22.7239201",
            "-43.4490317",
            "Lar das Dinha",
            "Presta assistencia a crianças de 05 a 16 anos que se encontre em situação de muita pobreza e vulnerabilidade social.",
            "99999-9999"
            "https://images.unsplash.com/photo-1602622931974-78228760b7b1?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "Venha como se sentir a vontade e traga muito amor e paciencia para dar",
            "Horário de visitas das 18h ate as 8h",
            "0"
        );
    `)

    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})