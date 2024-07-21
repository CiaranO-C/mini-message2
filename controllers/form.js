const getForm = (req, res, next) => {
    res.render('form', {
        title: 'Send',
        
    })
}

export default getForm