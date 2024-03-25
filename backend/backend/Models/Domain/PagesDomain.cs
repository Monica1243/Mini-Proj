namespace backend.Models.Domain
{
    public class PagesDomain
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; } = null;
        public string Category { get; set; } = null;
        public string Content { get; set; } = null;
    }
}
