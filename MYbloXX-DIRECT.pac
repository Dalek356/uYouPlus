// DIRECT-only PAC for an optional user-controlled VPN proxy override.
// This does not remove the original system MYbloXX setting.
function FindProxyForURL(url, host) {
    return "DIRECT";
}
