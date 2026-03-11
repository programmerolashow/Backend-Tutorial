import { Post } from "../Models/post.js";

// create a post
const createPost = async (req, res) => {
    try {
        const { name, description, age } = req.body;

        if (!name || !description || !age) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const post = await Post.create({ name, description, age });

        res.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error
        });
    }
};

// get posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts);

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error
        });
    }
};

// update post
const updatePosts = async (req, res) => {
    try {
        // check if body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "No data provided for update"
            });
        }

        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        if (!post) {
            return res.status(404).json({
                message: "Post not found"
        });
        }

        res.status(200).json({
            message: "Post Updated Successfully",
            post
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error
        });
    }
}

// delete post
const deletePosts = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);

        if (!deletedPost) {
            return res.status(404).json({
                message: "Post not found"
            });
        }

        res.status(200).json({
            message: "Post deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error
        });
    }
}

export { createPost, getPosts, updatePosts, deletePosts };