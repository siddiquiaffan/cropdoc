module.exports = {
  reactStrictMode: true,
  images:{
    domains: ['telegra.ph']
  },
  env: {
    MEMBERS: JSON.parse(process.env.MEMBERS) || [], // Array of team members [Must be in JSON format]
  }
}
