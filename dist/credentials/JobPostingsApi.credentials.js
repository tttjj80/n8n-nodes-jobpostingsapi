"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobPostingsApi = void 0;

class JobPostingsApi {
  constructor() {
    this.name = "jobPostingsApi";
    this.displayName = "JobPostingsAPI.com API";
    this.documentationUrl = "https://jobpostingsapi.com/docs";
    this.properties = [
      {
        displayName: "API Key",
        name: "apiKey",
        type: "string",
        typeOptions: { password: true },
        default: "",
        required: true,
        description: "Get your API key (100 free requests included) at https://jobpostingsapi.com",
      },
    ];
    this.authenticate = {
      type: "generic",
      properties: {
        headers: {
          "X-API-Key": "={{$credentials.apiKey}}",
          Authorization: "=Bearer {{$credentials.apiKey}}",
        },
      },
    };
  }
}
exports.JobPostingsApi = JobPostingsApi;
