module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        //todo:: inject it via the plugin or easier way
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)"
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            gridTemplateColumns: {
                'auto-fill'  : 'repeat(auto-fill, 290px)',
            },
            colors             : {
                'dark'         : '#0F172A',
                'darker'       : '#020617',
                'danger'       : '#EF4444',
                'digital-primary': '#6366F1',
                'digital-secondary': '#8B5CF6',
                'digital-accent': '#EC4899',
                'digital-success': '#10B981',
                'digital-dark': '#1E293B',
                'digital-light': '#F8FAFC',
                'cyber-blue': '#3B82F6',
                'cyber-purple': '#A855F7',
                'neon-green': '#22D3EE',
                'glass-white': 'rgba(255, 255, 255, 0.1)',
                'glass-dark': 'rgba(15, 23, 42, 0.8)'
            },
            spacing: {
              '3.75': '15px',
              '7.5' : '30px',
              '58'  : '232px',
              '62'  : '248px',
              '100' : '28rem',
              '116' : '464px',
              '132' : '528px',
              '200' : '800px',
            },
            borderRadius       : {
                'large': '22px',
                'big'  : '40px',
                'tiny' : '3px',
                DEFAULT: '.75rem',
            },
            fontSize           : {
                'icon-lg'   : '33px',
                'xxs'       : '10px',
                'xxxs'      : '8px',
                'title-size': '42px',
                '22px'      : '22px',
            },
            lineHeight         : {
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
            },
            boxShadow          : {
                'default' : '0 4px 20px rgba(99, 102, 241, 0.1)',
                'top'     : '0 -4px 20px rgba(0, 0, 0, 0.05)',
                'md'      : '0 8px 30px rgba(99, 102, 241, 0.12)',
                'dropdown': '0 10px 40px rgba(15, 23, 42, 0.15)',
                'light'   : '0 2px 15px rgba(99, 102, 241, 0.08)',
                'huge'    : '0 20px 60px rgba(99, 102, 241, 0.2)',
                'progress': '0 5px 20px rgba(16, 185, 129, 0.3)',
                'mobile'  : '0 10px 40px rgba(15, 23, 42, 0.2)',
                'glow'    : '0 0 20px rgba(99, 102, 241, 0.4)',
                'glow-lg' : '0 0 40px rgba(99, 102, 241, 0.5)',
                'card'    : '0 4px 24px rgba(15, 23, 42, 0.08)',
                'card-hover': '0 8px 40px rgba(99, 102, 241, 0.15)',
                'inner'   : 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
                'glass'   : '0 8px 32px rgba(15, 23, 42, 0.12)',
            },
            width              : {
                '18': '4.5rem',
                '22': '5.5rem',
                '74': '18.5rem',
                '76': '19rem',
                '78': '19.5rem',
            },
            height             : {
                'banner'        : '200px',
                'lg-banner'     : '428px',
                'full-banner'   : '600px',
                '500'           : '500px',
                '460'           : '460px',
            },
            minWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            zIndex             : {
                '1': '1',
                '2': '2',
                '-1': '-1',
            },
            screens            : {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
            backgroundOpacity  : {
                '05': '0.05',
            },
            transitionProperty : {
                'height': 'height'
            },
            keyframes: {
                slideUpFromBottom: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0%)', opacity: '1' },
                },
                slideDownFromBottom: {
                    '0%': { transform: 'translateY(0%)', opacity: '1' },
                    '100%': { transform: 'translateY(100%)', opacity: '0' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' },
                    '50%': { boxShadow: '0 0 40px rgba(99, 102, 241, 0.6)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
            },
            animation: {
                slideUpFromBottom: 'slideUpFromBottom .6s ease-out',
                slideDownFromBottom: 'slideDownFromBottom .6s ease-out',
                fadeIn: 'fadeIn 0.5s ease-out',
                fadeInUp: 'fadeInUp 0.6s ease-out',
                scaleIn: 'scaleIn 0.4s ease-out',
                glow: 'glow 2s ease-in-out infinite',
                float: 'float 3s ease-in-out infinite',
            },
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '12px',
                lg: '16px',
                xl: '24px',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'digital-pattern': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@salla.sa/twilight-tailwind-theme'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
    ],
}
