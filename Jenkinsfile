node {
    try {
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
       } catch(error) {
                withCredentials([[$class: 'StringBinding', credentialsId: 'slack-webhook-url', variable: 'SLACK_URL']]) {
                    sh "curl -XPOST -d 'payload={ \"color\": \"danger\", \"text\": \":warning: Build failed: $error (see <${env.BUILD_URL}/console|the build logs>)\" }' ${env.SLACK_URL}"
                    }
                }
}

