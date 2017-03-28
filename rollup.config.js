export default {
    entry: './dist/modules/ngx-clipboard.es5.js',
    dest: './dist/bundles/ngx-clipboard.umd.js',
    format: 'umd',
    exports: 'named',
    // Global namespace.
    moduleName: 'ngx.clipboard',
    // External libraries.
    external: [
        '@angular/core',
        '@angular/common',
        'rxjs/Observable',
        'rxjs/Observer',
        'clipboard'
    ],
    globals: {
        '@angular/core': 'ng.core',
        '@angular/common': 'ng.common',
        'rxjs/Observable': 'Rx',
        'rxjs/Observer': 'Rx',
        'clipboard': 'Clipboard'
    },
    onwarn: () => {
        return
    }
}