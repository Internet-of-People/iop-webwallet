# Build Images

```bash
# Build
$ docker build -f docker/DockerFile -t registry.iop-ventures.com/iop-stack/iop-webwallet/webwallet:latest .
```

```bash
# Run Locally
$ docker run -it --rm -p 8080:80 --name web registry.iop-ventures.com/iop-stack/iop-webwallet/webwallet:latest
```