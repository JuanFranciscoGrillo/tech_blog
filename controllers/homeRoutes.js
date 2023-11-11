router.get('/', async (req, res) => {
    try {
        // ... fetch posts logic ...
        res.render('home', {
            posts,
            loggedIn: req.session.loggedIn // Set loggedIn based on session
        });
    } catch (err) {
        // ... error handling ...
    }
});
