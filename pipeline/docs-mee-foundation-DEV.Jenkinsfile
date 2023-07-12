pipeline {
    agent any
    options { disableConcurrentBuilds() }
    environment {
        TAG = 'dev'
        NAME = 'docs-mee-foundation'
    }

    stages {
        stage('Prepare') {
            steps {
                sh 'echo $OCR_PWS | docker login iad.ocir.io  --username $OCR_USER  --password-stdin '
                sh """
                    wget -qO- https://get.pnpm.io/install.sh | ENV="/home/jenkins/.shrc" SHELL="/bin/sh" sh -
                """
            }
        }

        stage('Build dist') {
            steps {
                sh """
                    pwd
                    ls -la
                    cd docs
                    source /home/jenkins/.shrc                    
                    pnpm install
                    pnpm run build 
                    cd ..
                    pwd
                """
            }
        }

        stage('Build docker') {
            steps {                        
                sh """
                    sleep 15s;
                    docker build -t $OCR/$NAME:$BUILD_NUMBER -t $OCR/$NAME:$TAG -t $OCR/$NAME:latest -f Dockerfile  .
                    docker push $OCR/$NAME:$BUILD_NUMBER
                    docker push $OCR/$NAME:$TAG
                    docker push $OCR/$NAME:latest
                """
                }
        }

        stage('Restart svc') {
            steps {
                echo 'Restart service'
                sh 'oci ce cluster create-kubeconfig --cluster-id $OKE_DEV --region us-ashburn-1 --token-version 2.0.0  --kube-endpoint PRIVATE_ENDPOINT'
                sh '''
                   kubectl -n dev patch deployment docs-mee-foundation -p "{\\\"spec\\\": {\\\"template\\\": {\\\"metadata\\\": { \\\"labels\\\": { \\\"redeploy\\\": \\\"$(date +%s)\\\"}}}}}"
                '''
            }
        }
    }
}
