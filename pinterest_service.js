// Pinterest API Integration Service (Production Environment)
// Note: Sensitive business logic and core algorithms are omitted for proprietary reasons.

const axios = require('axios');

class PinterestService {
  constructor() {
    this.baseUrl = 'https://pinterest.com';
    // API keys are securely injected via environment variables
    this.accessToken = process.env.PINTEREST_ACCESS_TOKEN; 
  }

  /**
   * Fetches user profile to personalize dashboard onboarding.
   * Requested scope: user_accounts:read
   */
  async getUserProfile() {
    try {
      const response = await axios.get(`${this.baseUrl}/user_account`, {
        headers: { Authorization: `Bearer ${this.accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Pinterest profile:', error.message);
      throw new Error('Pinterest authentication failed.');
    }
  }

  /**
   * Creates a pin on behalf of the user after their explicit approval.
   * Requested scope: pins:write, boards:read
   */
  async createImagePin(boardId, title, description, mediaUrl) {
    const payload = {
      board_id: boardId,
      title: title,
      description: description,
      media_source: {
        source_type: 'image_url',
        url: mediaUrl
      }
    };

    try {
      const response = await axios.post(`${this.baseUrl}/pins`, payload, {
        headers: { Authorization: `Bearer ${this.accessToken}` }
      });
      return response.data;
    } catch (error) {
      console.error('Error creating pin:', error.message);
      throw new Error('Failed to publish pin.');
    }
  }
}

module.exports = PinterestService;
