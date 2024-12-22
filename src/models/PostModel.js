export const PostModel = {
    fetchPosts: async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
      } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
      }
    },
  
    fetchPostDetails: async (postId) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        return await response.json();
      } catch (error) {
        console.error('Error fetching post details:', error);
        return null;
      }
    },
  
    fetchComments: async (postId) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        return await response.json();
      } catch (error) {
        console.error('Error fetching comments:', error);
        return [];
      }
    },
  
    createPost: async (post) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        });
        return await response.json();
      } catch (error) {
        console.error('Error creating post:', error);
        return null;
      }
    },
  
    updatePost: async (postId, post) => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post),
        });
        return await response.json();
      } catch (error) {
        console.error('Error updating post:', error);
        return null;
      }
    },
  
    deletePost: async (postId) => {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          method: 'DELETE',
        });
        return true;
      } catch (error) {
        console.error('Error deleting post:', error);
        return false;
      }
    },
  };