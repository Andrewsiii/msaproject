namespace msaproject.GraphQL.Comments
{
    public record EditCommentInput
    (
        string CommentId,
        string? Content
    );
}
