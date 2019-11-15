node {
    try {
        def app
    
        stage('Clone repository') {
            checkout scm
        }
    
        stage('Build image') {
            app = docker.build('f4biogr/example-app')
        }

        stage('Test') {
            app.inside {
                sh 'npm test'
            }
        }
    
        stage('Push image') {
            docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                app.push('latest')
            }
        }
    } catch(error) {
        withCredentials([[$class: 'StringBinding', credentialsId: 'slack-webhook-url', variable: 'SLACK_URL']]) {
            sh "curl -XPOST -d 'playload={ \"color\": \"danger\", \"text\": \":warning: Build failed: $error (see <${env.BUILD_URL}/console|the build logs>)\"}' ${env.SLACK_URL}"
        }
    }
}