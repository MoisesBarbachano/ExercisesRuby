class Api::ArticlesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    page = 1
    page = params[:page] if params[:page]
    per_page = 10
    per_page = params[:per_page] if params[:per_page]
    @articles = Article.paginate(page: page, per_page: per_page).order(created_at: :desc)

    render json: {
      articles: @articles,
      current_page: @articles.current_page,
      pages: @articles.total_pages,
      elements_by_page: per_page
    }
  end

  def show
    @article = Article.find(params[:id])
    render json: @article
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      render json: @article, status: :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update(article_params)
      render json: @article, status: :ok
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    head :no_content
  end

  private
  def article_params
    params.require(:article).permit(:title, :content)
  end
end