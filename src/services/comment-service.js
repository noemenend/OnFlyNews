import APIService from "./API-service";

class CommentService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = "comments";
  }

  async getCommentsByArticleId(idArticle) {
    return this.APIServiceInstance.get(`${this.model}/?idArticle=${idArticle}`);
  }

  async postComment(comment) {
    return this.APIServiceInstance.post(comment, this.model);
  }
}

export default CommentService;
