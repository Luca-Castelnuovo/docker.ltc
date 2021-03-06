const sendEmail = (template, to, link) => {
    const emailKey = process.env.EMAIL_KEY;
    let templateId = '';

    switch (template) {
        case 'subscribe':
            templateId = 'AAABgYbUR2UAAAAC';
            break;
        case 'unsubscribe':
            templateId = 'AAABgYbHaBYAAAAB';
            break;
    }

    fetch('https://email.castelnuovo.xyz/v1/account/luca/submit', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${emailKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: {
                name: to,
                address: to,
            },
            from: {
                name: 'afac.castelnuovo.xyz',
                address: 'afac@castelnuovo.xyz',
            },
            template: templateId,
            render: {
                params: {
                    email: to,
                    link: link,
                },
            },
        }),
    });
};

module.exports = { sendEmail };
