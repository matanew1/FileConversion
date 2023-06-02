class MainController {
    static loadHomePage = async (_req, res) => {
        try {
            await res.status(200).json({ message: this.message });
        } catch (error) {
            await res.status(404).json({ error: error });
        }
    }

}
module.exports = MainController;