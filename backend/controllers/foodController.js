import foodModel from "../models/foodModels.js";
import fs from "fs";

const addFood = async (req, res) => {
    try {
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: Number(req.body.price),
            category: req.body.category,
            image: req.file ? req.file.filename : "no-image.png"
        });

        await food.save();
        return res.json({ success: true, message: "Food Added" });

    } catch (error) {
        console.error("Error adding food:", error);
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};

const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error("Error listing foods:", error);
        res.status(500).json({ success: false, message: "Error" });
    }
};

const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food not found" });
        }

        // Remove image file if exists
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.error("Error deleting file:", err.message);
            }
        });

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Food Removed" });

    } catch (error) {
        console.error("Error removing food:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { addFood, listFood, removeFood };
