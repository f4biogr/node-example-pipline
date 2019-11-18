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
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            app.push('latest')
            }  
        }
    }