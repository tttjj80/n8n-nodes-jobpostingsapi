"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostingsApi = void 0;

class JobPostingsApi {
  constructor() {
    this.description = {
      displayName: "JobPostingsAPI.com (B2B Hiring Signals)",
      name: "jobPostingsApi",
      usableAsTool: true,
      group: ["transform"],
      version: 1,
      subtitle: "={{$parameter[\"operation\"]}}",
      description: "Search 18M+ verified B2B job postings across Workday, Greenhouse, Lever, Ashby & LinkedIn for outbound sales signals",
      defaults: { name: "JobPostingsAPI.com" },
      inputs: ["main"],
      outputs: ["main"],
      credentials: [{ name: "jobPostingsApi", required: true }],
      requestDefaults: {
        baseURL: "https://api.jobpostingsapi.com",
        headers: { Accept: "application/json" },
      },
      properties: [
        {
          displayName: "Operation",
          name: "operation",
          type: "options",
          noDataExpression: true,
          options: [
            {
              name: "Search B2B Job Postings",
              value: "searchJobs",
              action: "Search verified B2B job postings",
              routing: {
                request: {
                  method: "GET",
                  url: "/v1/jobs/search",
                  qs: {
                    q: "={{$parameter.query}}",
                    location: "={{$parameter.location}}",
                    limit: "={{$parameter.limit}}",
                  },
                },
              },
            },
            {
              name: "Count Active Jobs by Tech Stack or Keyword",
              value: "countJobs",
              action: "Count active jobs by keyword or tech stack",
              routing: {
                request: {
                  method: "GET",
                  url: "/v1/jobs/count",
                  qs: {
                    q: "={{$parameter.query}}",
                  },
                },
              },
            },
          ],
          default: "searchJobs",
        },
        {
          displayName: "Search Query (Role, Skill, or Tech Stack)",
          name: "query",
          type: "string",
          default: "AI Engineer",
          description: "Job title, company, or technology keyword (e.g. 'Snowflake', 'Account Executive')",
        },
        {
          displayName: "Location",
          name: "location",
          type: "string",
          default: "United States",
          displayOptions: { show: { operation: ["searchJobs"] } },
        },
        {
          displayName: "Limit",
          name: "limit",
          type: "number",
          default: 20,
          displayOptions: { show: { operation: ["searchJobs"] } },
        },
      ],
    };
  }
}
exports.JobPostingsApi = JobPostingsApi;
