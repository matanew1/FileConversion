class MainController {
    constructor() {
        this.message = 'Home page loaded';
    }

    loadHomePage = async (_req, res) => {
        try {
            await res.status(200).json({ message: this.message });
        } catch (error) {
            await res.status(404).json({ error: error });
        }
    }

}

export default new MainController();