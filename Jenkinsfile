pipeline {
    agent any

    environment {
        APP_NAME = "CI-CD-DevOps-App"
        CONTAINER_NAME = "xenodochial_brown"
        PORT = "3000"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/bikramadk/simple-devops-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $APP_NAME .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                if [ $(docker ps -q -f name=$CONTAINER_NAME | wc -l) -gt 0 ]; then
                    docker stop $CONTAINER_NAME
                    docker rm $CONTAINER_NAME
                fi
                '''
            }
        }

        stage('Run New Container') {
            steps {
                sh '''
                docker run -d \
                  --name $CONTAINER_NAME \
                  -p $PORT:$PORT \
                  $APP_NAME
                '''
            }
        }
    }

    post {
        success {
            echo 'Deployment successful 🚀'
        }
        failure {
            echo 'Deployment failed ❌'
        }
    }
}
