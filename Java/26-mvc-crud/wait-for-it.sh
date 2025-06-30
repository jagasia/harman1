#!/bin/sh
# wait-for-it.sh

host="$1"
port="$2"
shift 2
cmd="$@"

echo "Waiting for $host:$port to be available..."

until nc -z "$host" "$port"; do
  echo "Waiting..."
  sleep 2
done

echo "$host:$port is available. Starting application..."
exec $cmd
