#!/usr/bin/env bash
set -u
SCRIPT_ROOT="$(dirname "$0")"

mysql -u root -p < ${SCRIPT_ROOT}/init.sql

exit $?
