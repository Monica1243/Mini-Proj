﻿namespace backend.Models.DTO
{
    public class AllPage
    {
        public Guid Page_Id { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; }
        public string Category { get; set; }
        public string Content { get; set; }
    }
}