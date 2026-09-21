import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/health", (_req, res) => {
    res.json({ status: "ok"});
});

export default app;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Backend listening on port ${PORT}`);
    });
}