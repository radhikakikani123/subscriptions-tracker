import aj from "..config/arcjet.js";

const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj.protect(req);

        if (decision.isDenied()) {
            if (decision.isRateLimited()) return res.status(429).json({ error: "Rate limit exceeded" });
            if (decision.isBoat()) return res.status(403).json({ error: "bot Detected" });

            return res.status(403).json({ error: "Access Denied" });
        }
        next();

    }
    catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
}

export default arcjetMiddleware;