let config = {
    'mongodb': {
        // 'URI': 'mongodb://mike:DucGiang94@ds247223.mlab.com:47223/oauth-test'
        'URI': 'mongodb://localhost:32768/oauth-test'
    },
    "CORS_OPTIONS": {
        origin: "http://localhost:3001",
        credentials: true
    },
};

export default config;