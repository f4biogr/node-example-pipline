node {
    def app
    
    stage('Clone Repository') {
        checkout scm
        }
    
    stage('Build Image') {
        app = docker.build('f4biogr/example-app')
        }

    stage('Test') {
        app.inside {
            sh 'npm test'
            }
        }  
    
    stage('Push Image') {
        docker.withRegistry('https://docker.pkg.github.com', 'docker-apk-credentials') {
            app.push('latest')
            }  
        }
    }
